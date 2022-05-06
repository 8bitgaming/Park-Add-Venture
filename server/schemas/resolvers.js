const {User, Review} = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedParks')
                    .populate('reviews');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Review.find(params).sort({ createdAt: -1});
        },
        reviews: async (parent, { _id }) => {
            return Review.findOne({ _id });
        }
    },
    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user)

            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        savePark: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedParks: { ...args, parkId: args.parkId} } },
                    { new: true, runValidators: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removePark: async (parent, { parkId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedParks: { parkId: parkId } } },
                    { new: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updatePark: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id, 'savedParks.parkId': args.parkId },
                    { $set: { 'savedParks.$.visited': args.visited, 'savedParks.$.dateVisited': args.dateVisited} },
                    { new: true, runValidators: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addReview: async (parent, args, context) => {
            if (context.user) {
              const review = await Review.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { reviews: review._id } },
                { new: true }
              );
      
              return review;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },

    }
};

module.exports = resolvers;
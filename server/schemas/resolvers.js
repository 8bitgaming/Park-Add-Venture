const {User} = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedParks')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
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

    }
};

module.exports = resolvers;
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        me: User
    },
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePark: 
    },
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        username: String
        savedParks: [Park]
    },
    type Park {
        parkID: String!
        parkName: String
        description: String
        image: String
        link: String
        visited: Boolean
        dateVisited: String
    }
    type Auth {
        token: ID!
        user: User
    }

`;

// export the typeDefs
module.exports = typeDefs;
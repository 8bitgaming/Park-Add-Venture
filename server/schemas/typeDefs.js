// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        me: User
    }
    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
        savePark(
            parkId: String!
            parkName: String
            description: String
            image: String
            link: String
            visited: Boolean
            dateVisited: String
            ): User
        updatePark(
            parkId: String!
            parkName: String
            description: String
            image: String
            link: String
            visited: Boolean
            dateVisited: String
            ): User
        removePark(parkId: String): User
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        username: String
        savedParks: [Park]
    }
    type Park {
        parkId: String!
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
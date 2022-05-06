import { gql } from "@apollo/client";

export const QUERY_USER_PARKS = gql`
  query Query {
    me {
      _id
      savedParks {
        parkId
        parkName
        image
        link
        visited
        dateVisited
        reviews{
          _id
          reviewText
          createdAt
        }
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;

export const QUERY_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;

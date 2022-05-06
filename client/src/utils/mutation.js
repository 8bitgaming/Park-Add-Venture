import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation addUser(
    $firstName: String!
    $username: String!
    $email: String!
    $password: String!
    $lastName: String!
  ) {
    addUser(
      firstName: $firstName
      username: $username
      email: $email
      password: $password
      lastName: $lastName
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PARK = gql`
  mutation AddPark(
    $parkId: String!
    $parkName: String
    $image: String
    $link: String
  ) {
    savePark(parkId: $parkId, parkName: $parkName, image: $image, link: $link) {
      _id
      firstName
      lastName
      email
      username
      savedParks {
        parkId
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!) {
    addReview(reviewText: $reviewText) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;

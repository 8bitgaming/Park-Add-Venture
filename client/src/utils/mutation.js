import { gql } from '@apollo/client';

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
mutation AddUser($firstName: String!, $username: String!, $email: String!, $password: String!, $lastName: String!) {
    addUser(firstName: $firstName, username: $username, email: $email, password: $password, lastName: $lastName) {
      token
    }
  }
`;
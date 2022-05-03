import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
    }
}
`;

export const SIGNUP_USER = gql `
mutation signup($username: String!, $password: String!)
signup(username: $username, password: $password) {
        token
    }
`
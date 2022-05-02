import { gql } from '@apollo/client';

export const QUERY_USER_PARKS = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstname
      lastname
      savedparks
      }
      parks {
        _id
        parkId
        parkName
        description
        link
        visited
        dateVisited
      }
    }
  }
`;
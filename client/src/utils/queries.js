import { gql } from "@apollo/client";

export const QUERY_USER_PARKS = gql`
  query me() {
    me() {
      _id
      firstname
      lastname
      savedParks {
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

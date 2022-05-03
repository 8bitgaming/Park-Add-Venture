import { gql } from '@apollo/client';

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
    }
  }
}
`

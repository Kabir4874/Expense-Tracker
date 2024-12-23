import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
  query AuthUser {
    authUser {
      _id
      username
      password
      profilePicture
      gender
    }
  }
`;
export const GET_USER_AND_TRANSACTIONS = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      password
      profilePicture
      gender
      transactions {
        _id
        userId
        description
        paymentType
        category
        amount
        location
        date
      }
    }
  }
`;

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

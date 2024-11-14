const userTypeDef = `#graphql
    type User{
        _id:Id!
        username:String! 
        password:String! 
        profilePicture: String 
        gender: String! 
    }
    type Query {
        users:[User!]
        authUser:User 
        user (userId:Id!):User 
    }
    type Mutation {
        signUp(input:SignUpInput!):User 
        login(input:LoginInput!):User 
        logout: LogoutResponse 
    }
    input SignUpInput {
        username:String! 
        name: String!
        password: String!
        gender: String!
    }
    input LoginInput{
        username:String! 
        password:String! 
    }
    type LogoutResponse {
        message: String!
    }
`;
export default userTypeDef;
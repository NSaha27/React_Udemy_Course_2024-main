const userHandleReducer = (currUsers, action) => {
  let newUserList = currUsers;
  switch(action.type){
    case "ADD_USER": {
      newUserList = [...currUsers, {
        username: action.payload.username,
        name: action.payload.name,
        gender: action.payload.gender,
        education: action.payload.education,
        jobs: action.payload.jobs,
        address: action.payload.address,
        phone: action.payload.phone,
        email: action.payload.email,
        password: action.payload.password,
        posts: action.payload.posts
      }];
      return newUserList;
    }
    case "UPDATE_USER": {
      newUserList = currUsers.map(user => {
        if(user.username === action.payload.username){
          return {
            username: action.payload.username,
            name: action.payload.name,
            gender: action.payload.gender,
            education: action.payload.education,
            jobs: action.payload.jobs,
            address: action.payload.address,
            phone: action.payload.phone,
            email: action.payload.email,
            password: action.payload.password,
            posts: action.payload.posts
          };
        }else{
          return user;
        }
      });
      return newUserList;
    }
    case "DELETE_USER": {
      newUserList = currUsers.filter(user => user.username !== action.payload.username);
      return newUserList;
    }
    default: {
      throw new Error("*** invalid action!");
    }
  }
};

export default userHandleReducer;
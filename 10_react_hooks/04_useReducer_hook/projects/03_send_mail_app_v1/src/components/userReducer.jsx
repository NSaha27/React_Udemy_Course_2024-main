function userReducer(currentUserList, action){
  switch(action.type){
    case "ADD_USER": {
      return [
        ...currentUserList,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          messages: action.payload.messages
        }
      ];
    }
    case "SEND_MAIL": {
      return currentUserList.map(user => {
        if(user.id === action.payload.id){
          return {
            ...user,
            messages: [...user.messages, action.payload.message]
          }
        }else{
          return user;
        }
      })
    }
    default: {
      throw new Error("*** invalid action!");
    }
  }
}

export default userReducer;
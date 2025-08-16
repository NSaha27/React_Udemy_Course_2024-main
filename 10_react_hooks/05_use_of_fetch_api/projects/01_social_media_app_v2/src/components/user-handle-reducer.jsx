const userHandleReducer = (users, action) => {
  let newUserList = users;
  switch (action.type) {
    case "ADD_USER": {
      newUserList = [
        ...users,
        {
          userId: action.payload.userId,
          name: action.payload.name,
          gender: action.payload.gender,
          education: action.payload.education,
          jobs: action.payload.jobs,
          address: action.payload.address,
          phone: action.payload.phone,
          email: action.payload.email,
          password: action.payload.password,
        },
      ];
      return newUserList;
    }
    case "ADD_INITIAL_USERS": {
      const initialUserList = [];
      for (let uId of action.payload.userIds) {
        initialUserList.push({
          userId: uId,
          name: "",
          gender: "",
          education: [],
          jobs: [],
          address: "",
          phone: "",
          email: "",
          password: "",
        });
      }
      newUserList = [...initialUserList];
      return newUserList;
    }
    case "UPDATE_USER": {
      newUserList = users.map((user) => {
        if (user.userId === action.payload.userId) {
          return {
            userId: action.payload.userId,
            name: action.payload.name,
            gender: action.payload.gender,
            education: action.payload.education,
            jobs: action.payload.jobs,
            address: action.payload.address,
            phone: action.payload.phone,
            email: action.payload.email,
            password: action.payload.password,
          };
        } else {
          return user;
        }
      });
      return newUserList;
    }
    case "DELETE_USER": {
      newUserList = users.filter(
        (user) => user.userId !== action.payload.userId
      );
      return newUserList;
    }
    default: {
      throw new Error("*** invalid action!");
    }
  }
};

export default userHandleReducer;

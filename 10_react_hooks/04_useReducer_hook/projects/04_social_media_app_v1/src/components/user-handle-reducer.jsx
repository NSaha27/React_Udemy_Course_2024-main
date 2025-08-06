const userHandleReducer = (users, action) => {
  let newUserList = users;
  switch (action.type) {
    case "ADD_USER": {
      newUserList = [
        ...users,
        {
          username: action.payload.username,
          name: action.payload.name,
          gender: action.payload.gender,
          education: action.payload.education,
          jobs: action.payload.jobs,
          address: action.payload.address,
          phone: action.payload.phone,
          email: action.payload.email,
          password: action.payload.password,
          posts: action.payload.posts,
        },
      ];
      return newUserList;
    }
    case "UPDATE_USER": {
      newUserList = users.map((user) => {
        if (user.username === action.payload.username) {
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
            posts: action.payload.posts,
          };
        } else {
          return user;
        }
      });
      return newUserList;
    }
    case "DELETE_USER": {
      newUserList = users.filter(
        (user) => user.username !== action.payload.username
      );
      return newUserList;
    }
    case "ADD_POST": {
      newUserList = users.map((user) => {
        if (user.username === action.payload.username) {
          const postId = user.posts.length;
          const newPostList = [
            ...user.posts,
            {
              id: postId,
              title: action.payload.title,
              desc: action.payload.desc,
              images: action.payload.images,
              likes: action.payload.likes,
              shares: action.payload.shares,
              comments: action.payload.comments,
            },
          ];
          user.posts = newPostList;
          return user;
        } else {
          return user;
        }
      });
      return newUserList;
    }
    case "UPDATE_POST": {
      newUserList = users.map((user) => {
        if (user.username === action.payload.username) {
          const updatedPostList = user.posts.map((post) => {
            if (post.id === action.payload.postId) {
              return {
                id: post.id,
                title: action.payload.title,
                desc: action.payload.desc,
                images: action.payload.images,
                likes: post.likes,
                shares: post.shares,
                comments: post.comments,
              };
            } else {
              return post;
            }
          });
          user.posts = updatedPostList;
          return user;
        } else {
          return user;
        }
      });
      return newUserList;
    }
    case "DELETE_POST": {
      newUserList = users.map((user) => {
        if (user.username === action.payload.username) {
          const newPostList = user.posts.filter(
            (post) => post.id !== action.payload.postId
          );
          user.posts = newPostList;
          return user;
        } else {
          return user;
        }
      });
      return newUserList;
    }
    default: {
      throw new Error("*** invalid action!");
    }
  }
};

export default userHandleReducer;

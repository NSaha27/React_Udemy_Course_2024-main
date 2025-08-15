const postHandleReducer = (currPosts, action) => {
  let newPostList = currPosts;
  switch(action.type){
    case "ADD_POST": {
      try{
        newPostList = [
          ...currPosts,
          {
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body,
            tags: action.payload.tags,
            reactions: action.payload.reactions,
            views: action.payload.views,
            images: action.payload.images
          }
        ]
        return newPostList;
      }catch(err){
        throw new Error(err.message);
      }
    }
    case "ADD_INITIAL_POSTS": {
      newPostList = action.payload.posts;
      return newPostList;
    }
    case "UPDATE_POST": {
      try{
        newPostList = currPosts.map(post => {
          if(post.id === action.payload.id){
            return {
              id: action.payload.id,
              title: action.payload.title,
              body: action.payload.body,
              tags: action.payload.tags,
              images: action.payload.images,
            };
          }else{
            return post;
          }
        })
        return newPostList;
      }catch(err){
        throw new Error(err.message);
      }
    }
    case "DELETE_POST":
      try{
        newPostList = currPosts.filter(post => post.id !== action.payload.id);
        return newPostList;
      }catch(err){
        throw new Error(err.message);
      }
  }
}

export default postHandleReducer;
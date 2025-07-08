function TaskReducer(curTaskList, action){
  switch(action.type){
    case "ADD_TASK": {
      return [
        ...curTaskList,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case "EDIT_TASK": {
      return curTaskList.map(curTask => {
        if(curTask.id === action.task.id){
          return action.task;
        }else{
          return curTask;
        }
      });
    }
    case "DELETE_TASK": {
      return curTaskList.filter(curTask => curTask.id !== action.id)
    }
    default: {
      throw new Error("***invalid action " + action.type);
    }
  }
}

export default TaskReducer;
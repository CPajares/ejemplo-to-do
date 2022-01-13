import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  if (action.type === actionTypes.createTask) {
    newTasks = [...tasks, action.task];
  } else if (action.type === actionTypes.getTasks) {
    newTasks = [...action.tasks];
  }
  return newTasks;
};

export default tasksReducer;

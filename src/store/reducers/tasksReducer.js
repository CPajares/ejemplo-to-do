import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  if (action.type === actionTypes.createTask) {
    newTasks = [...tasks, action.task];
  }

  return newTasks;
};

export default tasksReducer;

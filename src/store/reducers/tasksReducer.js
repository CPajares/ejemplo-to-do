import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  if (action.type === actionTypes.createTask) {
    newTasks = [...tasks, action.task];
  } else if (action.type === actionTypes.getTasks) {
    newTasks = [...action.tasks];
  } else if (action.type === actionTypes.modifyTask) {
    newTasks = [
      ...tasks.filter((task) => task.id !== action.task.id),
      action.task,
    ];
  }
  return newTasks;
};

export default tasksReducer;

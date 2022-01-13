import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  switch (action.type) {
    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;
    case actionTypes.getTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.modifyTask:
      newTasks = [
        ...tasks.filter((task) => task.id !== action.task.id),
        action.task,
      ];
      break;
    case actionTypes.deleteTask:
      newTasks = [...tasks.filter((task) => task.id !== action.task.id)];
      break;

    case actionTypes.filterTasks:
      newTasks = [...action.tasks];
      break;
    default:
      break;
  }
  return newTasks;
};

export default tasksReducer;

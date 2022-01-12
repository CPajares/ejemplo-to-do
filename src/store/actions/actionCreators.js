import actionTypes from "./actionTypes";

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

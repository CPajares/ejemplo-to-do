import actionTypes from "./actionTypes";

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const getTasksAction = (tasks) => ({
  type: actionTypes.getTasks,
  tasks,
});

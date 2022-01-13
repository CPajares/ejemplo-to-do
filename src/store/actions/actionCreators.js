import actionTypes from "./actionTypes";

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const getTasksAction = (tasks) => ({
  type: actionTypes.getTasks,
  tasks,
});

export const modifyAction = (task) => ({
  type: actionTypes.modifyTask,
  task,
});

export const deleteTaskAction = (task) => ({
  type: actionTypes.deleteTask,
  task,
});

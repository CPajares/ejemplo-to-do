import axios from "axios";
import { useCallback, useContext } from "react";
import {
  createTaskAction,
  deleteTaskAction,
  getTasksAction,
  modifyAction,
} from "../store/actions/actionCreators";
import tasksContext from "../store/contexts/tasksContext";

const useTasks = () => {
  const { tasks, dispatch } = useContext(tasksContext);

  const urlAPI = process.env.REACT_APP_URL_API;

  const getTasks = useCallback(async () => {
    const response = await axios.get(urlAPI);

    if (response.status === 200) {
      dispatch(getTasksAction(response.data));
    }
  }, [dispatch, urlAPI]);

  const createTask = async (task) => {
    const response = await axios.post(urlAPI, task);

    if (response.status === 201) {
      dispatch(createTaskAction(response.data));
    }
  };

  const modifyTask = async (task) => {
    const response = await axios.put(`${urlAPI}/${task.id}`, task);

    if (response.status === 200) {
      dispatch(modifyAction(response.data));
    }
  };

  const deleteTask = async (task) => {
    const response = await axios.delete(`${urlAPI}/${task.id}`);

    if (response.status === 200) {
      dispatch(deleteTaskAction(task));
    }
  };

  return {
    tasks,
    createTask,
    getTasks,
    modifyTask,
    deleteTask,
  };
};

export default useTasks;

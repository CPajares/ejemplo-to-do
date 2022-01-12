import axios from "axios";
import { useContext } from "react";
import { createTaskAction } from "../store/actions/actionCreators";
import tasksContext from "../store/contexts/tasksContext";

const useTasks = () => {
  const { tasks, dispatch } = useContext(tasksContext);

  const urlAPI = process.env.REACT_APP_URL_API;

  const createTask = async (task) => {
    const response = await axios.post(urlAPI, task);

    if (response.status === 201) {
      dispatch(createTaskAction(response.data));
    }
  };

  return {
    tasks,
    createTask,
  };
};

export default useTasks;

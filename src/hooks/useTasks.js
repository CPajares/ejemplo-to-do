import { useContext } from "react";
import tasksContext from "../store/contexts/tasksContext";

const useTasks = () => {
  const { tasks, dispatch } = useContext(tasksContext);

  return {
    tasks,
  };
};

export default useTasks;

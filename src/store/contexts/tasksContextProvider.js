import { useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";
import TasksContext from "./tasksContext";

const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;

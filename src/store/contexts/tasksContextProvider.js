import { useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";
import tasksContext from "./tasksContext";

const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <tasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TasksContextProvider;

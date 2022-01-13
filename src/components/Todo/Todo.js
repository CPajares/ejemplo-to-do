import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import Header from "../Header/Header";

const Todo = () => {
  const { getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return <Header />;
};

export default Todo;

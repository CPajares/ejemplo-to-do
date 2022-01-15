import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import CreateForm from "../CreateForm/CreateForm";
import SearchForm from "../SearchForm/SearchForm";
import TaskCard from "../TaskCard/TaskCard";
import "./Header.css";

const Header = () => {
  const [mostrarInfo, setMostarInfo] = useState("");

  const { tasks, getTasks } = useTasks();

  const clickTarea = (event) => {
    setMostarInfo(event.target.id);
  };

  const clickMostrar = (event) => {
    setMostarInfo(event.target.id);
    getTasks();
  };

  return (
    <>
      <nav className="nav-container">
        <h1 className="nav__title">TU TO-DO LIST</h1>
        <ul className="nav__list d-flex">
          <li>
            <button onClick={clickTarea} id="crear" type="button">
              CREAR TAREA
            </button>
          </li>
          <li>
            <button onClick={clickTarea} id="buscar" type="button">
              BUSCAR TAREA
            </button>
          </li>
          <li>
            <button onClick={clickMostrar} id="mostrar" type="button">
              MOSTRAR TODAS
            </button>
          </li>
        </ul>
      </nav>
      {mostrarInfo === "crear" && <CreateForm />}
      {mostrarInfo === "buscar" && <SearchForm />}
      {mostrarInfo === "mostrar" && (
        <div className="tasks-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;

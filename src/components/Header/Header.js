import { useState } from "react";
import CreateForm from "../CreateForm/CreateForm";

const Header = () => {
  const [mostrarInfo, setMostarInfo] = useState("");

  const clickTarea = (event) => {
    setMostarInfo(event.target.id);
  };

  return (
    <>
      <nav>
        <h1>TU TO-DO LIST</h1>
        <ul>
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
        </ul>
      </nav>

      {mostrarInfo === "crear" && <CreateForm />}

      <h2>Tus Proximas tareas:</h2>
    </>
  );
};

export default Header;

import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const { modifyTask, deleteTask } = useTasks();

  const [isEdit, setIsEdit] = useState(false);
  const [taskEdit, setTaskEdit] = useState(task);
  const changeTask = (event) => {
    setTaskEdit({ ...taskEdit, [event.target.id]: event.target.value });
  };
  const clickEdit = () => {
    if (isEdit) {
      modifyTask(taskEdit);
    }
    setIsEdit(!isEdit);
  };

  const clickModify = () => {
    const newTask = { ...task, isDone: !task.isDone };
    modifyTask(newTask);
  };

  const clickDelete = () => {
    deleteTask(task);
  };

  return (
    <>
      <div
        className={` ${
          task.isDone ? "task-done " : "task-pending "
        }task-container`}
      >
        {isEdit ? (
          <div className="d-flex flex-column">
            <input
              value={taskEdit.name}
              type="text"
              id="name"
              name="name"
              onChange={changeTask}
              placeholder="titulo"
            />
            <textarea
              value={taskEdit.description}
              rows={4}
              type="text"
              id="description"
              name="description"
              onChange={changeTask}
              placeholder="descripcion"
            />
            <input
              value={taskEdit.date}
              type="date"
              id="date"
              name="date"
              onChange={changeTask}
              placeholder="fecha"
            />
            <select
              name="category"
              id="category"
              value={taskEdit.category}
              onChange={changeTask}
            >
              <option></option>
              <option>Compra</option>
              <option>Ocio</option>
              <option>Personal</option>
              <option>Trabajo</option>
              <option>Casa</option>
            </select>

            <p>{task.isDone ? "Hecha" : "Pendiente"}</p>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <p>{task.category}</p>
            <p>{task.isDone ? "Hecha" : "Pendiente"}</p>
          </div>
        )}

        <div className="buttons-container d-flex justify-content-around">
          <button type="button" onClick={clickEdit}>
            {isEdit ? "Guardar" : "Editar"}
          </button>
          <button type="button" onClick={clickDelete}>
            Eliminar
          </button>
          <button type="button" onClick={clickModify}>
            {!task.isDone ? "Hecha" : "Pendiente"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;

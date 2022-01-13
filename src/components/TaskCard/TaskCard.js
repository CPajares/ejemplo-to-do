import { useState } from "react";
import useTasks from "../../hooks/useTasks";

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
      <div>
        {isEdit ? (
          <div>
            <input
              value={taskEdit.name}
              type="text"
              id="name"
              name="name"
              onChange={changeTask}
              placeholder="titulo"
            />
            <input
              value={taskEdit.description}
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

            <p>{task.isDone ? "Hecha" : "Pendiente"}</p>
          </div>
        ) : (
          <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <p>{task.isDone ? "Hecha" : "Pendiente"}</p>
          </div>
        )}
      </div>
      <div>
        <button type="button" onClick={clickEdit}>
          {isEdit ? "Guardar" : "Editar tarea"}
        </button>
        <button type="button" onClick={clickDelete}>
          Eliminar tarea
        </button>
        <button type="button" onClick={clickModify}>
          Marcar como {!task.isDone ? "Hecha" : "Pendiente"}
        </button>
      </div>
    </>
  );
};

export default TaskCard;

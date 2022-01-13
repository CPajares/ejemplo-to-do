import useTasks from "../../hooks/useTasks";

const TaskCard = ({ task }) => {
  const { modifyTask, deleteTask } = useTasks();

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
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.date}</p>
          <p>{task.isDone ? "Hecha" : "Pendiente"}</p>
        </div>
      </div>
      <div>
        <button type="button">Editar tarea</button>
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

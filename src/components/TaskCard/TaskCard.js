const TaskCard = ({ task }) => {
  console.log(task);
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
        <button>Editar tarea</button>
        <button>Eliminar tarea</button>
        <label htmlFor="state">
          Marcar como {!task.isDone ? "Hecha" : "Pendiente"}
        </label>
        <input id="state" type="checkbox" />
      </div>
    </>
  );
};

export default TaskCard;

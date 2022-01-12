import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import "./CreateForm.css";

const CreateForm = () => {
  const { createTask } = useTasks();

  const [isDisabled, setIsDisabled] = useState(true);

  const initForm = {
    name: "",
    description: "",
    date: "",
    category: "",
    isDone: false,
  };

  const [formCreate, setFormCreate] = useState(initForm);

  useEffect(() => {
    if (
      formCreate.name !== "" &&
      formCreate.description !== "" &&
      formCreate.date !== "" &&
      formCreate.category !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    formCreate.category,
    formCreate.date,
    formCreate.description,
    formCreate.name,
  ]);

  const changeForm = (event) => {
    setFormCreate({ ...formCreate, [event.target.id]: event.target.value });
  };

  const clickCreate = async (event) => {
    event.preventDefault();
    await createTask(formCreate);
    setFormCreate(initForm);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form
        autoComplete="off"
        className="d-flex flex-column align-items-start justify-content-evenly"
      >
        <h2>Nueva Tarea</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre de la tarea</label>
          <input
            value={formCreate.name}
            type="text"
            id="name"
            name="name"
            onChange={changeForm}
            placeholder="Tarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción de la tarea</label>
          <input
            type="text"
            id="description"
            value={formCreate.description}
            name="description"
            onChange={changeForm}
            placeholder="Descripción"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            value={formCreate.date}
            name="date"
            onChange={changeForm}
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <label htmlFor="category">Categoria</label>
          <select
            className="form-control"
            name="category"
            id="category"
            data-testid="select-category"
            value={formCreate.category}
            onChange={changeForm}
          >
            <option></option>
            <option>Compra</option>
            <option>Ocio</option>
            <option>Personal</option>
            <option>Trabajo</option>
            <option>Casa</option>
          </select>
        </div>
        <button disabled={isDisabled} onClick={clickCreate} type="submit">
          CREAR
        </button>
      </form>
    </div>
  );
};

export default CreateForm;

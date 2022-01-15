import { useState } from "react/cjs/react.development";
import useTasks from "../../hooks/useTasks";
import { filterTasksAction } from "../../store/actions/actionCreators";
import TaskCard from "../TaskCard/TaskCard";
import "./SearchForm.css";

const SearchForm = () => {
  const { dispatch, getTasks, tasks } = useTasks();

  const [searchValue, setSearchValue] = useState("");
  const [dataToSearch, setDataToSearch] = useState("");
  const taskToSearch = { [searchValue]: dataToSearch };

  const selectedValue = (event) => {
    switch (event.target.value) {
      case "Nombre":
        setSearchValue("name");
        break;
      case "Categoría":
        setSearchValue("category");
        break;
      case "Fecha":
        setSearchValue("date");
        break;
      case "Estado":
        setSearchValue("state");
        break;
      default:
        setSearchValue("");
    }
  };
  const changeDataToSearch = (event) => {
    if (searchValue === "date") {
      const date = event.target.value;
      setDataToSearch(date.split("-").reverse().join("/"));
    } else {
      setDataToSearch(event.target.value);
    }
  };

  const clickSearch = async (event) => {
    event.preventDefault();
    const tasks = await getTasks();
    const taskFound = tasks.filter(
      (task) =>
        task[searchValue].toLowerCase() ===
        taskToSearch[searchValue].toLowerCase()
    );
    dispatch(filterTasksAction(taskFound));
  };

  return (
    <>
      <form className="form-container d-flex flex-column align-items-center">
        <div className="section-container form-group d-flex justify-content-around align-items-center">
          <label htmlFor="category">Buscar por:</label>
          <select
            onClick={selectedValue}
            className="form-control select-category"
            name="search"
            id="search"
          >
            <option></option>
            <option>Nombre</option>
            <option>Categoría</option>
            <option>Fecha</option>
          </select>
        </div>
        <div className="section-container form-group d-flex justify-content-around align-items-center">
          {searchValue && (
            <input
              type={searchValue === "date" ? "date" : "text"}
              onChange={changeDataToSearch}
            />
          )}
        </div>
        <button onClick={clickSearch} type="submit">
          BUSCAR
        </button>
      </form>
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </>
  );
};

export default SearchForm;

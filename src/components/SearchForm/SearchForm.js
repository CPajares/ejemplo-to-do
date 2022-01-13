import { useState } from "react/cjs/react.development";
import useTasks from "../../hooks/useTasks";
import { filterTasksAction } from "../../store/actions/actionCreators";

const SearchForm = () => {
  const { dispatch, getTasks } = useTasks();

  const [searchValue, setSearchValue] = useState("");
  const [dataToSearch, setDataToSearch] = useState("");
  const taskToSearch = { [searchValue]: dataToSearch };

  const selectedValue = (event) => {
    switch (event.target.value) {
      case "Nombre":
        setSearchValue("name");
        break;
      case "Descripción":
        setSearchValue("description");
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
    <form>
      <div className="form-group d-flex align-items-center">
        <label htmlFor="category">Buscar por:</label>
        <select
          onClick={selectedValue}
          className="form-control"
          name="search"
          id="search"
        >
          <option></option>
          <option>Nombre</option>
          <option>Descripción</option>
          <option>Fecha</option>
        </select>
      </div>
      {searchValue && (
        <input
          type={searchValue === "date" ? "date" : "text"}
          onChange={changeDataToSearch}
        />
      )}
      <button onClick={clickSearch} type="submit">
        BUSCAR
      </button>
    </form>
  );
};

export default SearchForm;

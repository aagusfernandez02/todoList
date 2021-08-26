import { uid } from "uid";

export function Form({ setStatus, setInputText, inputText, setTodos, todos }) {
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: uid(),
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <input
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
            value={inputText}
          />
          <button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="uncompleted">Incompletas</option>
          </select>
        </div>
      </form>
    </div>
  );
}

import { Todo } from "./Todo";

export function TodoList({ filteredTodos, todos, setTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

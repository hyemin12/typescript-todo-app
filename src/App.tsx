import CreateTodo from "components/createTodo";
import Header from "components/Header";
import TodoList from "components/todolist/";

import useLocalStorage from "hooks/useLocalStorage";

import "style.scss";

function App() {
  const [todos, setTodos] = useLocalStorage("todoApp");

  return (
    <div className='App'>
      <div className='container'>
        <div className='inner'>
          <Header todos={todos} />
          <CreateTodo todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;

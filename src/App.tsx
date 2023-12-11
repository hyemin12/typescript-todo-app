import { useState } from "react";
import CreateTodo from "components/createTodo";
import Header from "components/Header";
import TodoList from "components/todolist/";

import useLocalStorage from "hooks/useLocalStorage";

import "style.scss";
import Welcome from "components/welcome";
import Button from "components/Button";

function App() {
  const [todos, setTodos] = useLocalStorage("todoApp");
  const [welcomeTip, setWelcomeTip] = useState(true);

  return (
    <div className='App'>
      <div className='container'>
        <div className='inner'>
          {welcomeTip ? (
            <Welcome setWelcomeTip={setWelcomeTip} />
          ) : (
            <>
              <Header todos={todos} />
              <div>
                <form>
                  <input type='radio' name='todo-filter' checked value='모두' />
                  <label>모두</label>

                  <input type='radio' name='todo-filter' value='완료' />
                  <label>완료</label>

                  <input type='radio' name='todo-filter' value='중요' />
                  <label>중요</label>
                </form>
                <Button $type='transparent' text='완료 할일 삭제' />
              </div>
              <CreateTodo todos={todos} setTodos={setTodos} />
              <TodoList todos={todos} setTodos={setTodos} setWelcomeTip={setWelcomeTip} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

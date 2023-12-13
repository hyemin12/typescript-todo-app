import { useState } from "react";
import CreateTodo from "components/CreateTodo";
import Header from "components/Header";
import TodoList from "components/TodoList";
import Welcome from "components/Welcome";
import Button from "components/Button";
import Filters from "components/Filters";

import useTodoStore from "store/store";
import "style.scss";

function App() {
  const { deleteCompleteTodo } = useTodoStore();
  const [welcomeTip, setWelcomeTip] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <div className='inner'>
          {welcomeTip ? (
            <Welcome setWelcomeTip={setWelcomeTip} />
          ) : (
            <>
              <Header />

              <CreateTodo />
              <TodoList setWelcomeTip={setWelcomeTip} />
              <div className='feature-wrapper'>
                <Filters />
                <Button $type='transparent' text='완료 할일 삭제' action={deleteCompleteTodo} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

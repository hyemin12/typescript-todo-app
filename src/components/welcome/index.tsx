import { Dispatch, SetStateAction } from "react";
import Header from "components/Header";
import CreateTodo from "components/createTodo";
import Button from "components/Button";

import "./Welcome.style.scss";

const Welcome = ({ setWelcomeTip }: { setWelcomeTip: Dispatch<SetStateAction<boolean>> }) => {
  const todos = [
    {
      id: 1,
      text: "React 공식 문서 읽기",
      done: false,
    },
  ];
  const closeWelcomeTip = () => {
    setWelcomeTip(false);
  };
  const { id, text, done } = todos[0];
  return (
    <div className='welcome-tip-wrapper'>
      <Button $type='defalt' text='닫기' action={closeWelcomeTip} />
      <Header todos={todos} />
      <div className='create-todo-wrapper'>
        <CreateTodo todos={todos} />
      </div>

      <ul className='todo-list'>
        <li className={(done ? "done " : "") + "todo-item"}>
          <>
            <input type='checkbox' id={`check-${id}`} checked={done} />
            <label htmlFor={`check-${id}`}>{done ? <i className='fas fa-check'></i> : ""}</label>
          </>
          <p>{text}</p>
          <div className='btn_elcomeTodoItemrapper'>
            <Button icon='fas fa-pen' $type='default' $disabled={done} />
            <Button icon={"fas fa-minus-circle"} $type='danger' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;

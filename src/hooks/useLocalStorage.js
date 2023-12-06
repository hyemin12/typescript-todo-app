import { useState, useEffect } from "react";

const initialState = [
  {
    id: 1234,
    text: "타입스크립트 공부하기",
    done: false,
  },
  {
    id: 555,
    text: "할일 완료!",
    done: true,
  },
];

const useLocalStorage = (key) => {
  const localDB = JSON.parse(localStorage.getItem(key));

  const [state, setState] = useState(localDB || initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
};
export default useLocalStorage;

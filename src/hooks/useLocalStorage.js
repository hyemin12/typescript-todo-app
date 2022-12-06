import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const localDB = JSON.parse(localStorage.getItem(key));

  const [state, setState] = useState(localDB || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
export default useLocalStorage;

import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const localDB = JSON.parse(localStorage.getItem(key));
  const [state, setState] = useState(localDB || initialValue);
  console.log(key, localDB, initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }, [state]);
  return [state, setState];
};
export default useLocalStorage;
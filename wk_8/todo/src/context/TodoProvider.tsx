import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext({});

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('created');
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

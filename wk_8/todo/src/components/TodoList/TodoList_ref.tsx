import { useContext, useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';

export default function TodoList() {
  const [completeCount, setCompleteCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  const { todos } = useContext(TodoContext);

  const generateTodo = () => {
    setTodos((prev) => [
      ...todos,
      { title: 'Todo', description: 'description' },
    ]);
  };
  return (
    <>
      <Link to={'/create'}>Create</Link>
      <button onClick={() => generateTodo()}>Generate</button>
      <div id='todolist-container'>
        <div id='todolist-wrapper'>
          {todos.map(({ title, description }) => (
            <Todo
              title={title}
              description={description}
              setComplete={setCompleteCount}
            />
          ))}
        </div>
        <div id='metric-container'>
          <h3>Metrics</h3>
          <div>
            <span className='metric-row'>
              Todos completed: <p>{completeCount}</p>
            </span>
            <span className='metric-row'>
              Todos deleted: <p>0</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

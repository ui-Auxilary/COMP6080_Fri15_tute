import { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

import { Link } from 'react-router-dom';

export default function TodoList() {
  const [completeCount, setCompleteCount] = useState(0);
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div id='todolist-container'>
        <div id='todolist-wrapper'>
          <Todo />
        </div>
        <div id='metric-container'>
          <h3>Metrics</h3>
          <div>
            <span className='metric-row'>
              Todos completed: <p>0</p>
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

import { useContext, useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';
import { motion } from 'framer-motion';

export default function TodoList() {
  const [completeCount, setCompleteCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  const { todos, setTodos } = useContext(TodoContext);

  const generateTodo = () => {
    setTodos((prev) => [
      ...todos,
      { title: 'Todo', description: 'description' },
    ]);
  };
  return (
    <>
      <Link to={'/create'}>Create</Link>
      <button id='generate' onClick={() => generateTodo()}>
        Generate
      </button>
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
              Todos completed: <p id='count'>{completeCount}</p>
            </span>
            <span className='metric-row'>
              Todos deleted: <p>0</p>
            </span>
          </div>
        </div>
      </div>

      <motion.div
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          left: '100px',
          borderRadius: 30,
          backgroundColor: '#fff',
        }}
        animate={{ rotate: [0, 180] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        style={{
          width: 80,
          height: 80,
          position: 'absolute',
          bottom: '200px',
          right: '200px',
          borderRadius: 10,
          backgroundColor: '#fff',
        }}
        animate={{ rotate: [0, 180] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </>
  );
}

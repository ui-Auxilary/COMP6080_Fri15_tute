import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';

import { useNavigate } from 'react-router-dom';

export default function Create() {
  const { setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  return (
    <div>
      <Link id='back' to={'/'}>
        Back
      </Link>
      <form>
        <div>
          <h3>Title</h3>
          <input
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            type='text'
          />
        </div>
        <div>
          <h3>Description</h3>
          <input
            name='description'
            type='text'
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          id='create'
          onClick={(e) => {
            e.preventDefault();
            setTodos((prev) => [...prev, { title, description }]);
            // navigate(-1);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

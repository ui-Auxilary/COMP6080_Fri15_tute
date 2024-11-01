import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';

export default function Create() {
  const { setTodos } = useContext(TodoContext);

  return (
    <div>
      <Link to={'/'}>Back</Link>
      <form>
        <div>
          <h3>Title</h3>
          <input type='text' />
        </div>
        <div>
          <h3>Description</h3>
          <input type='text' />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodos((prev) => [
              ...prev,
              { title: 'Create page', description: 'Desc2' },
            ]);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

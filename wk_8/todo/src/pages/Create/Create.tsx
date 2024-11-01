import { Link } from 'react-router-dom';

export default function Create() {
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
        <button>Create</button>
      </form>
    </div>
  );
}

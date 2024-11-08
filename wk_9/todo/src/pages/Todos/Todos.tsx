import TodoList from '../../components/TodoList/TodoList';
import './Todos.css';

export default function Todos() {
  return (
    <div id='todos-container'>
      <div id='todo-header'>Todos</div>
      <TodoList />
    </div>
  );
}

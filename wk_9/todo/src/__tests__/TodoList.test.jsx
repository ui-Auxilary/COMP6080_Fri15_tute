import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from '../components/TodoList/TodoList';
import TodoProvider from '../context/TodoProvider';

// describe('Todo', () => {
//   const TodoListWithProvider = () => {
//     return (
//       <TodoProvider>
//         <TodoList />
//       </TodoProvider>
//     );
//   };

//   test('component renders', () => {
//     render(<TodoListWithProvider />);
//     expect(screen.getByText('Todos')).toBeDefined();
//     expect(screen.getByText('Generate')).toBeDefined();
//   });
// });

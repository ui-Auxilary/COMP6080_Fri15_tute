import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Todo from '../components/Todo/Todo';
import { useState } from 'react';

describe('Todo', () => {
  test('component renders', () => {
    const { getByRole } = render(
      <Todo title={'hello'} description={'world'} setComplete={false} />
    );
    expect(screen.getByText('hello')).toBeDefined();
    expect(screen.getByText('world')).toBeDefined();
    expect(getByRole('checkbox').checked).toEqual(false);
  });

  const TodoListWithState = () => {
    const [complete, setComplete] = useState(false);

    return (
      <>
        <Todo title={'hello'} description={'world'} setComplete={setComplete} />
        <div data-testid='complete'>{complete ? 'true' : 'false'}</div>
      </>
    );
  };

  test('Completion updates checkbox', () => {
    render(<TodoListWithState />);

    const checkbox = screen.getByRole('checkbox');
    const complete = screen.getByTestId('complete');

    fireEvent.click(checkbox);

    expect(screen.getByText('hello')).toBeDefined();
    expect(screen.getByText('world')).toBeDefined();
    expect(checkbox.checked).toEqual(true);
    expect(complete.textContent).toEqual('true');
  });
});

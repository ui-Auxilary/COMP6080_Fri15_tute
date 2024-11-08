import { useState } from 'react';
import './Todo.css';

export default function Todo({ title, description, setComplete }) {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleComplete = () => {
    if (!isComplete) {
      setComplete((prev) => prev + 1);
      setIsComplete(true);
    }
  };

  return (
    <div className='todo'>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <input
        disabled={isComplete}
        role='checkbox'
        type='checkbox'
        className='checkbox'
        onClick={handleComplete}
      />
    </div>
  );
}

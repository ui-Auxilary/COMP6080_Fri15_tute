import { useState } from 'react';
import './Todo.css';

export default function Todo() {
  return (
    <div className='todo'>
      <div>
        <h3>Todo</h3>
        <p>Description</p>
      </div>
      <input type='checkbox' className='checkbox' />
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [filter, setFilter] = useState('all');
  return (
    <div className='container'>
      <h1>Todo App</h1>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default App;
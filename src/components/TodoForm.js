// TodoForm.js
import React, { useState } from 'react';


const TodoForm = () => {
  
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  

  return (
    <form>
      <div>
        <label>Title:</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;


import React, { useState } from 'react';
import { useTodo } from '../components/TodoContext';

const TodoForm = () => {
  //const addTodo=useTodo();
  const {addTodo }  = useTodo();
  console.log('Task and description',addTodo);
  //const [task, setTask] = useState('');
  const [task,setTask]=useState('');
  const [description, setDescription] = useState('');

  const Submitform = (e) => {
    console.log(e);
    e.preventDefault();
    if (task.trim() !== '') // remove the space
    {
      addTodo(`${task} - ${description}`);
      setTask('');   // Clear Input Text
      setDescription('');
    }
  };

  return (
    <form onSubmit={Submitform}>
      <div>
        <label>Title:</label>
        <input type="text" value={task} onChange={
          (title) => {
          console.log(title.target.value)
          setTask(title.target.value)
          }
        } />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={
          (description) =>{
            console.log(description.target.value)
            setDescription(description.target.value)
          }
        } />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

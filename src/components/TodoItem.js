
import React, { useState } from 'react';
import { useTodo } from '../components/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, { task: editedTask, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <li>
      {
        !isEditing ? (
        <div>
          <div>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <strong>{todo.task}</strong>
            </span>
          </div>
          <p>{todo.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ) : (
        <div>
          <div>
            <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          </div>
          
          <button onClick={handleSave}>Save</button>
        </div>
      )
    }
    </li>
  );
};

export default TodoItem;

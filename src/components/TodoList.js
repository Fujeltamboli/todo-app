
import React from 'react';
import TodoItem from './TodoItem';
import { useTodo } from '../components/TodoContext';

const TodoList = ({ filter }) => {
  const { todos } = useTodo();
  //console.log('task',todos);
  const filteredTodos = filterTodos(todos, filter);
  //console.log(filterTodos);
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter((todo) => todo.completed);
    case 'active':
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

export default TodoList;

import React, { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  console.log(action);// Check user wich acTion perform
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload.changes } : todo
        ),
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), task: todo }
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    });
  };

  const editTodo = (id, changes) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: { id, changes }
    });
  };

  return (
    <TodoContext.Provider value={
      { 
        todos: state.todos, 
        addTodo, 
        toggleTodo, 
        deleteTodo,
         editTodo
         }
        }>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  // context.map((element, index) => {
  //   if (!e) {
  //     console.log(e);
  //   }
  // })
  if (!context) {
    throw new Error('e');
  }
  return context;
};

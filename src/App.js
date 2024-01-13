import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';
const App = () => {
  const [filter, setFilter] = useState('all');
  console.log(filter);
  return (
    <TodoProvider>
      <div className='container'>
        <h1>Todo App</h1>
{/*Form Section*/}
        <TodoForm />
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
        <TodoList filter={filter}/>
      </div>
    </TodoProvider>
  )
}

export default App;


// export const TodoProvider = ({ children }) => { 
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   const addTodo = (todo) => {
//     dispatch({
//       type: 'ADD_TODO',
//       payload: { id: Date.now(), task: todo }
//     });
//   };

//   const toggleTodo = (id) => {
//     dispatch({
//       type: 'TOGGLE_TODO',
//       payload: id
//     });
//   };

//   const deleteTodo = (id) => {
//     dispatch({
//       type: 'DELETE_TODO',
//       payload: id
//     });
//   };

//   const editTodo = (id, changes) => {
//     dispatch({
//       type: 'EDIT_TODO',
//       payload: { id, changes }
//     });
//   };

//   return (
//     <TodoContext.Provider value={
//       { 
//         todos: state.todos, 
//         addTodo, 
//         toggleTodo, 
//         deleteTodo,
//          editTodo
//          }
//         }>
//       {children}
//     </TodoContext.Provider>
//   );
// };
import React, { useReducer } from 'react'

export const initialState = { 
todos:[
  
  {item: 'Learn Redux',
    completed: false,
    id: Date.now()}]
 }
// Initial count is established

// We will use the same reducer we created in the previous section
export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos:[
          ...state.todos,
        
        {task:action.payload,
        id: Date.now(),
        completed:false}
        ]
      }
    case 'COMPLETED_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
      };
    case "CLEAR_COMPLETED":
      return{
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, task: action.payload.task} : todo)
      }
    default:
      return state
  }
}


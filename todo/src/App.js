import React, { useReducer } from 'react'
import TodoForm from './components/todoform';
import TodoList from './components/todoList';
import {initialState, reducer} from './reducers/reducer';
import Todo from '../src/components/todo';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return(
  <div>
    <TodoForm />
    <TodoList todos={state.todos}/>
    
  </div>);}

export default App
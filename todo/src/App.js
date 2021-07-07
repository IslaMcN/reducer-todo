import React, { useReducer } from 'react'
import TodoForm from './components/todoform';
import TodoList from './components/todoList';
import {initialState, reducer} from './reducers/reducer';
import Todo from '../src/components/todo';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = item => dispatch({type: "ADD_TODO", payload: item});
  const completed = id => dispatch({type: "COMPLETED_TODO",
  id: id });
  const clear = () => dispatch({type: "CLEAR_COMPLETED"});
  const updateTodo= (task, id) => dispatch({type: 'UPDATE_TODO', payload: { task, id}});
  return(
  <div>
    <TodoForm addTodo={addTodo} clear={clear}/>
    <TodoList todos={state.todos} completed={completed} updateTodo={updateTodo}/>
    
  </div>);}

export default App
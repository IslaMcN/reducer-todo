import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = (props) => {
  return(
    <>
    {props.todos.map(todo =>  <Todo key = {todo.id}todo={todo} completed={props.completed} updateTodo={props.updateTodo} />)};
    </>
  )}


export default TodoList
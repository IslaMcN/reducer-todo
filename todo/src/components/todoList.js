import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = (props) => {
  return(
    <>
    {props.todos.map(todo =>  <Todo todo={todo} completed={props.completed} />)};
    </>
  )}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
import React, { useReducer } from 'react'

export const initialState = { 
    item: 'Learn Redux',
    completed: false,
    id: Date.now()
 }
// Initial count is established

// We will use the same reducer we created in the previous section
export function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
            item: action.text,
            completed: false,
            id: action.id
        }
      ]
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state
  }
}


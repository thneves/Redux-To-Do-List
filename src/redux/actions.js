import * as actions from "./actionTypes";

let nextTodoId = 0;


// addTodo - creates the action to add todos.
// It takes a single string varibale content and returns and ADD_TODO action wtih payload contaning a self-cinremented id and content.

export const addTodo = content => ({
  type: actions.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

// toggleTodo - created the action to toggle todos.
// It takes a single number variable id and returns a TOGGLE_TODO action withg payload containg id only.

export const toggleTodo = id => ({
  type: actions.TOGGLE_TODO,
  payload: { id }
})

// setFilter - creates the action to set the app's active filter.
// It takes a single string varibale filter and returns a SET_FILTER action with payload containg the filter itself.

export const setFilter = filter => ({
  type: actions.SET_FILTER,
  payload: { filter }
});
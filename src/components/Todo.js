import React from 'react';
import cx from 'classnames';
import '../index.css'

// This is the component that renders a single todo item:
// It renders the todo content, and shows that a todo is completed by crossing it out.

const Todo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /* dispatches action to toggle todo */ } // dispatches the action to toggle the todo's complete status upon OnClick
  >
    {todo && todo.completed ? "Done" : "Must Do"}{" "}
    <span
       className={cx(
         "todo-item__text",
         todo && todo.completed && "todo-item__text--completed"
       )} 
    >
      {todo.content}
    </span>
  </li>
);

export default Todo;
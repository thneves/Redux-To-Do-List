import React from 'react';
import Todo from './Todo';
import '../index.css'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "Nothing to, I'm free"}
  </ul>
)

export default TodoList;
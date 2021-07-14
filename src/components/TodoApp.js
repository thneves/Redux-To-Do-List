import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';
import '../index.css';


export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  )
}
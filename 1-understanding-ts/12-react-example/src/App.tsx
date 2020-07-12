import React, {useState} from 'react';
// import { Route } from 'react-router-dom';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log('text', text)
    setTodo(prevTodos => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text
      }
    ]);
  }

  const delteHandler = (todoId: string) => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={delteHandler} />
    </div>
  );
}

export default App;

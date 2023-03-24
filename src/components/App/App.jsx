import React, { useState } from "react";
import "./App.css";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import { nanoid } from "nanoid";

function App() {
  
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');


  const createTodoItem = (label, minute, second) => {
    return {
      label,
      completed: false,
      id: nanoid(),
      date: new Date(),
      minute,
      second
    };
  }

  const deleteItem = (id) => {
    const idx = todoData.filter((el) => el.id !== id);
    setTodoData(idx)
  }

  const addItem = (text, minute, second) => {
    const newItem = createTodoItem(text, minute, second);
    const newArr = [...todoData, newItem];

    setTodoData(newArr);
  }

  const onToggleProperty = (arr, id, propName) => {
    return arr.map((el) => (el.id === id ? { ...el, [propName]: !el[propName] } : el));
  };

  const onToggleCompleted = (id) => {
    setTodoData(onToggleProperty(todoData, id, 'completed'))
  }

  const filterTask = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const clearCompleted = () => {
    const newTodoData = todoData.filter((item) => !item.completed);

    setTodoData(newTodoData);
  }


  const itemsLeft = todoData.filter((el) => el.completed).length;
  const visibleItems =  filterTask(todoData, filter);
  const todoCount = todoData.length - itemsLeft;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addItem}/>
      </header>
      <section className="main">
        <TaskList todos={visibleItems} onDeleted={deleteItem} onToggleCompleted={onToggleCompleted}/>
        <Footer filter={filter} todoCount={todoCount} onFilterChange={onFilterChange} onClear={clearCompleted}/>
      </section>
    </section>
  );
}

export default App;

import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';


const TaskList = ({ todos, onDeleted, onToggleCompleted, addItem }) => {
    const elements = todos.map((item) => {
        return (
          <li key={item.id}>
            <Task
              {...item}
              onDeleted={() => onDeleted(item.id)}
              onToggleCompleted={() => onToggleCompleted(item.id)}
              addItem={addItem}
            />
          </li>
        );
      });
    
      return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
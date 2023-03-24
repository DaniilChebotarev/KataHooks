import React from 'react';
import './Footer.css';
import TaskFilter from '../TaskFilter/TaskFilter';



const Footer = ({ todoCount, filter, onFilterChange, onClear }) => {
    return (
        <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
  
        <TaskFilter filter={filter} onFilterChange={onFilterChange} />
  
        <button className="clear-completed" onClick={onClear}>
          Clear completed
        </button>
      </footer>
    );
};

export default Footer;
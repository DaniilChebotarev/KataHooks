import React from 'react';
import './TaskFilter.css';


const TaskFilter = ({ filter, onFilterChange }) => {

    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' },
      ];
      
      
    const button = buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'selected' : '';
        return (
          <button className={`${clazz}`} key={name} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        );
      });

      return (
        <ul className="filters">
          <li>{button}</li>
        </ul>
      );
};

export default TaskFilter;
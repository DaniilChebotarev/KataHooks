
import React, { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = ({onItemAdded}) => {
  const [label, setLabel] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onMinuteChange = (e) => {
    setMinute(e.target.value);
  };

  const onSecondChange = (e) => {
    setSecond(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(label.trim() !== '') {
        onItemAdded(label, minute, second)
        setLabel('')
    }

    e.target.reset();
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
        <input value={label} className="new-todo" placeholder="Task" autoFocus onChange={onLabelChange} />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          onChange={onMinuteChange}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onChange={onSecondChange}
        />
        <button type="submit" className="button__form" />
      </form>
    );
};

export default NewTaskForm;
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../Timer/Timer';
import './Task.css'
const Task = (props) => {
    const { id, onDeleted, onToggleCompleted, completed, date, second, minute, label} = props;
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(label)

    const onEdit = () => {
        setIsEdit((el) => !el)
    }

    let classNames = 'view';

    if (completed) {
      classNames += ' completed';
    }

    if (isEdit) {
      return (
        <input
          autoFocus
          className="editing"
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
                setIsEdit(!isEdit)
            }
          }}
        />
      );
    }

    return (
        <div className={classNames}>
          <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted} />
          <label>
            <span className="description" onClick={onToggleCompleted} onKeyDown={onToggleCompleted}>
              {text}
            </span>
            <Timer second={Number(second)} minute={Number(minute)} />
            <span className="created">{`created ${formatDistanceToNow(date)} ago`}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      );
};

export default Task;
import React from 'react';
import '../styles/SelectTask.css';

const SelectedTask = props => (
  <div className='select-task'>
    <button onClick={props.handleToggle}>
      {
        props.isComplete ?
          (<span style={{
            color: 'red',
          }}>Undo</span>) :
          (<span style={{
            color: 'green',
          }}>
            Complete
          </span>)
      }
    </button>
    <button style={{
      color: 'white',
    }} onClick={props.handleEdit}>Edit</button>
  </div>
);

export default SelectedTask;

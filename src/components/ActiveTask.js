import React from 'react';
import '../styles/ActiveTask.css';

const ActiveTask = props => (
  <div className='active-task'>
    <h3>
      { props.content || 'Placeholder Task' }
    </h3>
    <div>
      {
        props.isComplete ?
          'Completed' :
          'Active'
      }
    </div>
  </div>
);

export default ActiveTask;

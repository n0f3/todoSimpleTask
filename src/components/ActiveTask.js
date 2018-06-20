import React from 'react';


const ActiveTask = props => (
  <div>
    {props.content}
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

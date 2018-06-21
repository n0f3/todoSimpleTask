import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/ActiveTask.css';

const ActiveTask = props => (
  <div className='active-task'>
    <h3>
      { props.content || 'Placeholder Task' }
    </h3>
    <div className='active-task-status'>
      {
        props.isComplete ?
          'Completed' :
          'Active'
      }
    </div>
  </div>
);

ActiveTask.propTypes = {
  content: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default ActiveTask;

import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Tasks.css'

const TasksStatus = ({ tasks }) => {
  const incomplete = tasks.filter((task) => task.isComplete === false);
  const allComplete = incomplete.length < 1;
  return (
    <div className='tasks-status-container' style={{
      backgroundColor: allComplete ? '#30c778' : '#25a4ee',
    }}>
      {
        allComplete ?
          <div className='tasks-status-message complete'>
            <h2 className="tasks-status-message-title">
              All tasks completed
        </h2>
            <div className="tasks-status-message-extra">
              Well done!
        </div>
          </div>
          :
          <div className='tasks-status-message '>
            <h2 className="tasks-status-message-title">
              Complete all your tasks!
          </h2>
            <div className="tasks-status-message-extra">
              You have {incomplete.length} active tasks
          </div>
          </div>
      }
    </div>
  );
}

TasksStatus.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TasksStatus;

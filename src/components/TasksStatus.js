import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Tasks.css'

const TasksStatus = ({ tasks }) => (
  <div className='tasks-status-container'>
    {
      tasks.every((task) => task.isComplete === true) ?
      <div className='tasks-status-message'>
        <div className="tasks-status-message-title">
          All tasks completed
        </div>
        <div className="tasks-status-message-extra">
          Well done!
        </div>
      </div>
        :
        <div className='tasks-status-message'>
          <div className="tasks-status-message-title">
            Complete all your tasks!
          </div>
          <div className="tasks-status-message-extra">
            You have {tasks.length} active tasks
          </div>
        </div>
    }
  </div>
);

TasksStatus.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TasksStatus;

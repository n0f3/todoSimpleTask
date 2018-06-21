import React from 'react';
import { PropTypes } from 'prop-types';
import AddTask from '../containers/AddTask';
import Task from '../containers/Task';
import '../styles/Tasks.css';

const TasksList = ({ tasks}) => (
  <div className='tasks-container'>
    <div className='tasks-list'>
      {
        tasks.map(
          (task, index) =>
            (
              <Task
                key={index}
                {...task}
              />
            )
          )
      }
      <AddTask />
    </div>
  </div>
)

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TasksList;

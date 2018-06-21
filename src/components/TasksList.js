import React from 'react';
import { PropTypes } from 'prop-types';
import AddTask from '../containers/AddTask';
import Task from '../containers/Task';
import '../styles/Tasks.css';

const TasksList = ({ tasks, editTask, saveTask, toggleTask, selectTask, deleteTask }) => (
  <div className='tasks-container'>
    <div className='tasks-list'>
      {
        tasks.map(
          (task, index) =>
            (
              <Task
                key={index}
                {...task}
                handleEdit={editTask}
                handleSave={saveTask}
                handleToggle={toggleTask}
                handleSelect={selectTask}
                handleDelete={deleteTask}
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

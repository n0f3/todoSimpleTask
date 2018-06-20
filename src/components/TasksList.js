import React from 'react';
import AddTask from '../containers/AddTask';
import Task from './Task';
import '../styles/Tasks.css';

const TasksList = ({ tasks, editTask, saveTask, toggleTask }) => (
  <ul className='tasks-list'>
    {
      tasks.map(
        (task, index) =>
          (<li key={index}>
            <Task {...task} handleEdit={editTask} handleSave={saveTask} handleToggle={toggleTask} />
          </li>)
      )
    }
    <li>
      <AddTask />
    </li>
  </ul>
)
export default TasksList;

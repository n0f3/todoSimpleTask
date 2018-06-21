import React from 'react';
import AddTask from '../containers/AddTask';
import Task from './Task';
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
export default TasksList;

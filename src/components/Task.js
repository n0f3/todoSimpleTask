import React from 'react';
import { PropTypes } from 'prop-types';
import ActiveTask from './ActiveTask';
import SelectedTask from './SelectedTask';
import EditTask from './EditTask';
import '../styles/Task.css';

const Task = props => {
    const isTaskComplete = props.isComplete;
    const isTaskEditing = props.isEditing;
    const isTaskSelected = props.isSelected;
      return (
        <div
          className='task'
          onClick={() => {
            if (!isTaskEditing)
              props.handleSelect(props.id);
          }}>
          {
            isTaskSelected ?
              <SelectedTask
                isComplete={isTaskComplete}
                handleToggle={() => props.handleToggle(props.id)}
                handleEdit={() => props.handleEdit(props.id)}
                handleDelete={() => props.handleDelete(props.id)}
              /> :
              isTaskEditing ?
                <EditTask
                  id={props.id}
                  content={props.content}
                  onTaskSave={props.handleSave}
                /> :
                <ActiveTask
                  content={props.content}
                  isComplete={isTaskComplete}
                />
          }
        </div>
      )
    }

Task.defaultProps = {
  content: 'New Task',
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Task;

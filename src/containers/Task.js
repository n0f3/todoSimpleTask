import React from 'react';
import { PropTypes } from 'prop-types';
import { editTask, saveTask, toggleTask, selectTask, deleteTask } from '../actions/index';
import { connect } from 'react-redux';
import ActiveTask from '../components/ActiveTask';
import SelectedTask from '../components/SelectedTask';
import EditTask from '../components/EditTask';
import '../styles/Task.css';

const mapDispatchToProps = (dispatch, ownProps) => ({
  editTask: () => dispatch(editTask(ownProps.id, ownProps.content)),
  saveTask: (newContent) => dispatch(saveTask(ownProps.id, newContent)),
  toggleTask: () => dispatch(toggleTask(ownProps.id)),
  selectTask: () => dispatch(selectTask(ownProps.id)),
  deleteTask: () => dispatch(deleteTask(ownProps.id)),
});

const Task = props => {
    const isTaskComplete = props.isComplete;
    const isTaskEditing = props.isEditing;
    const isTaskSelected = props.isSelected;
      return (
        <div
          className='task'
          onClick={() => {
            if (!isTaskEditing)
              props.selectTask();
          }}>
          {
            isTaskSelected ?
              <SelectedTask
                isComplete={isTaskComplete}
                handleToggle={props.toggleTask}
                handleEdit={props.editTask}
                handleDelete={props.deleteTask}
              /> :
              isTaskEditing ?
                <EditTask
                  content={props.content}
                  onTaskSave={
                    (newContent) => props.saveTask(newContent)
                  }
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
};

export default connect(
  null,
  mapDispatchToProps
)(Task);

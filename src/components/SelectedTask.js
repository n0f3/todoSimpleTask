import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/SelectTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const SelectedTask = props => (
  <div className='select-task'>
    <button
      className='task-button'
      onClick={props.handleToggle}>
      {
        props.isComplete ?
          (<span style={{
            color: 'red',
          }}>Undo</span>) :
          (<span style={{
            color: 'green',
          }}>
            Complete
          </span>)
      }
    </button>
    <button
      className='task-button'
      style={{
      color: 'white',
      }}
      onClick={props.handleEdit}
    >
      Edit
    </button>
    <button
      style={{
        position: 'absolute',
        top: 10,
        right: 0,
        zIndex: 10
      }}
      onClick={props.handleDelete}
    >
      <FontAwesomeIcon
        icon={faTrashAlt}
        color='red'
      />
    </button>
  </div>
);

SelectedTask.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default SelectedTask;

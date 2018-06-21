import React from 'react';
import { addTask } from '../actions/index';
import { connect } from 'react-redux';
import '../styles/Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddTask = ({ dispatch }) => (
  <div
    className='task'
    onClick={() => dispatch(addTask())}
  >
    <div>
      <FontAwesomeIcon icon={faPlus} /> Add Task
    </div>
  </div>
);

export default connect()(AddTask);

import React from 'react';
import { addTask } from '../actions/index';
import { connect } from 'react-redux';
import '../styles/Task.css';

const AddTask = ({ dispatch }) => (
  <div
    className='task'
    onClick={() => dispatch(addTask())}
  >
    <div>
      &#43; Add Task
    </div>
  </div>
);

export default connect()(AddTask);

import React from 'react';
import { addTask } from '../actions/index';
import { connect } from 'react-redux';

const AddTask = ({ dispatch }) => (
  <div>
    <button onClick={() => dispatch(addTask())}>
      Add Task
    </button>
  </div>
);

export default connect()(AddTask);

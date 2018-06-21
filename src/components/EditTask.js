import React, { Component } from 'react';
import '../styles/EditTask.css';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.content,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className='edit-task'>
        <input
          style={{
            border: 'none',
          }}
          placeholder='Enter task name'
          value={this.state.name}
          type='text'
          maxLength='15'
          onChange={this.handleInput}
        />
        <button
          className='save-btn'
          onClick={() => {
            this.props.onTaskSave(
              this.state.name,
            )
          }}
        >
          Save
        </button>
      </div>
    )
  }
}
export default EditTask;

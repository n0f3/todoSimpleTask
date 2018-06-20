import ActionTypes from './types';

let taskId = 0;

export const addTask = () => ({
  type: ActionTypes.ADD_TASK,
  id: taskId++,
  content: '',
});

export const saveTask = (id, content) => ({
  type: ActionTypes.SAVE_TASK,
  content,
});

export const editTask = (id, content) => ({
  type: ActionTypes.EDIT_TASK,
  content
});

export const toggleTask = id => ({
  type: ActionTypes.TOGGLE_TASK
})

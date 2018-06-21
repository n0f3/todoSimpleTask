import ActionTypes from './types';

let taskId = 0;

export const addTask = () => ({
  type: ActionTypes.ADD_TASK,
  id: taskId++,
  content: '',
});

export const saveTask = (id, content) => ({
  type: ActionTypes.SAVE_TASK,
  id,
  content,
});

export const editTask = (id) => ({
  type: ActionTypes.EDIT_TASK,
  id
});

export const toggleTask = id => ({
  type: ActionTypes.TOGGLE_TASK,
  id
});

export const selectTask = id => ({
  type: ActionTypes.SELECT_TASK,
  id,
});

export const deleteTask = id => ({
  type: ActionTypes.DELETE_TASK,
  id
});

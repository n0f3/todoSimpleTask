import ActionTypes from './types';

let taskId = 0;

export const addTodo = content => ({
  type: ActionTypes.ADD_TASK,
  id: taskId,
  content
});

export const editTodo = (id, content) => ({
  type: ActionTypes.EDIT_TASK,
  content
});

export const completeTodo = id => ({
  type: ActionTypes.COMPLETE_TASK
})

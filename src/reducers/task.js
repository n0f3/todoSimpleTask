import ActionTypes from '../actions/types';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...state, {
        id: action.id,
        content: action.content,
        isComplete: false,
      }];
      
    case ActionTypes.EDIT_TASK:
      return [
        state.map(
          task => task.id === action.id ? {
            ...task,
            content: action.content,
          } : task
        )
      ];
    case ActionTypes.COMPLETE_TASK:
      return [
        state.map(
          task => task.id === action.id ? {
            ...task,
            content: '',
            isComplete: true,
          } : task
        )
      ];
    default:
      return state;
  }
}

export default tasks;

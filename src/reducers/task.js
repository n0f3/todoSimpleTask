import ActionTypes from '../actions/types';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...state, {
        id: action.id,
        content: action.content,
        isComplete: false,
        isSaved: false,
      }];
    case ActionTypes.SAVE_TASK:
      return state.map(
        task => task.id === action.id ? {
          ...task,
          content: action.content,
          isSaved: true,
        } : task
      );
    case ActionTypes.EDIT_TASK:
      return state.map(
          task => task.id === action.id ? {
            ...task,
            content: action.content,
          } : task
        );
    case ActionTypes.TOGGLE_TASK:
      return state.map(
          task => task.id === action.id ? {
            ...task,
            isComplete: !task.isComplete,
          } : task
        );
    default:
      return state;
  }
}

export default tasks;

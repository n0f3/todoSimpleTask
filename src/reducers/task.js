import ActionTypes from '../actions/types';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...state, {
        id: action.id,
        content: action.content,
        isComplete: false,
        isEditing: true,
        isSelected: false,
      }];
    case ActionTypes.SAVE_TASK:
      return state.map(
        task => task.id === action.id ? {
          ...task,
          content: action.content,
          isEditing: false,
        } : task
      );
    case ActionTypes.EDIT_TASK:
      return state.map(
        task => task.id === action.id ? {
          ...task,
          isEditing: true,
        } : task
      );
    case ActionTypes.SELECT_TASK:
      return state.map(
        task => task.id === action.id ? {
          ...task,
          isSelected: !task.isSelected,
        } : task
      );
    case ActionTypes.TOGGLE_TASK:
      return state.map(
        task => task.id === action.id ? {
          ...task,
          isComplete: !task.isComplete,
        } : task
      );
    case ActionTypes.DELETE_TASK:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}

export default tasks;

import { connect } from 'react-redux';
import { editTask, saveTask, toggleTask, selectTask } from '../actions/index';
import TasksList from '../components/TasksList';

const mapStateToProps = state => ({
  tasks: state.tasks,
});
const mapDispatchToProps = dispatch => ({
  editTask: (id, content) => dispatch(editTask(id, content)),
  saveTask: (id, content) => dispatch(saveTask(id, content)),
  toggleTask: (id) => dispatch(toggleTask(id)),
  selectTask: (id) => dispatch(selectTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksList);

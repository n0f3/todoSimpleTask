import { connect } from 'react-redux';
import TasksStatus from '../components/TasksStatus';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(
  mapStateToProps,
  null
)(TasksStatus);

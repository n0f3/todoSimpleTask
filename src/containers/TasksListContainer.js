import { connect } from 'react-redux';

import TasksList from '../components/TasksList';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(
  mapStateToProps,
  null,
)(TasksList);

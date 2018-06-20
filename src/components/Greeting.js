import React from 'react';
import { PropTypes } from 'prop-types';
const Greeting = (props) => (
  <div>
    {`${props.message},${props.userName}`}
  </div>
);

Greeting.defaultProps = {
  message: 'Hello',
  userName: 'user'
};

Greeting.propTypes = {
  message: PropTypes.string,
  userName: PropTypes.string,
};

export default Greeting;

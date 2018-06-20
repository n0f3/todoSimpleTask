import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Header.css';

const Header = props => (
  <header className='header'>
    <h1 className='header-title' >
      { props.headerTitle }
    </h1>
    {props.children}
  </header>
);



Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
}



export default Header;


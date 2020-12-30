import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <i className={icon}></i> {title}
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

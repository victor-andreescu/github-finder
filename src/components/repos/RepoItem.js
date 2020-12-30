import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card my-3'>
      <div className='card-body'>
        <h5 className='card-title'>{repo.name}</h5>
        <a href={repo.html_url} className='card-link'>
          Check it out
        </a>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;

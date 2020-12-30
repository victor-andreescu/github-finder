import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return (
    <div className='row mt-3'>
      {repos.map((repo) => (
        <div className='col-4' key={repo.id}>
          <RepoItem repo={repo} />
        </div>
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;

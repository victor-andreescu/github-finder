import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { loading, user, getUser, repos, getUserRepos } = githubContext;
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-outline-secondary'>
        Back to Search
      </Link>

      <div className='card mt-3'>
        <div className='row g-0'>
          <div className='col-md-4 p-3'>
            <img src={avatar_url} className='img-fluid' alt={name} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                {name}

                <span
                  className={`badge bg-${
                    hireable ? 'success' : 'danger'
                  } mx-2 fw-normal text-uppercase`}
                  style={{ fontSize: '10px' }}
                >
                  Hireable
                </span>
              </h5>
              <p className='card-text text-muted'>Location: {location}</p>
              <h6 className='card-title'>Bio</h6>
              <p className='card-text'>{bio}</p>
              <a href={html_url} className='btn btn-primary'>
                Visit Github Profile
              </a>
              <p className='card-text text-muted mb-0 mt-3'>
                Username: {login}
              </p>
              <p className='card-text text-muted my-0'>Company: {company}</p>
              <p className='card-text text-muted my-0'>Website: {blog}</p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='card-footer text-center'>
              {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
              <span className='badge bg-secondary mx-1'>
                Followers {followers}
              </span>
              <span className='badge bg-secondary mx-1'>
                Following {following}
              </span>
              <span className='badge bg-secondary mx-1'>
                Public Repos {public_repos}
              </span>
              <span className='badge bg-secondary mx-1'>
                Public Gists {public_gists}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;

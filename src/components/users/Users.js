import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='row'>
      {users.map((user) => (
        <div className='col-4' key={user.id}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;

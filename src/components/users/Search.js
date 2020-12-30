import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;
  const [text, setText] = useState('');

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something!', 'danger');
      return;
    }

    searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <div className='input-group mb-3'>
          <input
            type='text'
            name='text'
            value={text}
            onChange={onChange}
            className='form-control'
            placeholder='Search Users...'
          />
          {users.length > 0 && (
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={clearUsers}
            >
              Clear
            </button>
          )}

          <button className='btn btn-primary' type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading(true);
    const result = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        auth: {
          username: process.env.REACT_APP_GITHUB_CLIENT_ID,
          password: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        },
      }
    );
    dispatch({ type: SEARCH_USERS, payload: result.data.items });
  };

  // Get User
  const getUser = async (username) => {
    setLoading();

    const result = await axios.get(`https://api.github.com/users/${username}`, {
      auth: {
        username: process.env.REACT_APP_GITHUB_CLIENT_ID,
        password: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });
    dispatch({ type: GET_USER, payload: result.data });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const result = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc`,
      {
        auth: {
          username: process.env.REACT_APP_GITHUB_CLIENT_ID,
          password: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        },
      }
    );
    dispatch({ type: GET_REPOS, payload: result.data });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

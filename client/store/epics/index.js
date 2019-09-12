import { combineEpics } from 'redux-observable';
import { loginEpic } from './login';
import { currentuserEpic, logoutEpic, updateCurrentUserEpic } from './currentuser';
import { usersEpic, createUserEpic } from './users';
import { userEpic, updateUserEpic, deleteUserEpic } from './user';

export const rootEpic = combineEpics(
  loginEpic,
  currentuserEpic,
  usersEpic,
  userEpic,
  createUserEpic,
  updateUserEpic,
  deleteUserEpic,
  logoutEpic,
  updateCurrentUserEpic,
);
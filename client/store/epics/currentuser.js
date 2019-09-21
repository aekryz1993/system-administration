import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { FETCH_CURRENTUSER, succedFetch, failedFetch, LOGOUT_REQUEST, failedLogout, succedLogout, UPDATE_CURRENTUSER, succedUpdate, failedUpdate } from '../actions/currentuser';
import auth from '../../auth/auth-helper';
import { fetchCurrentUser, logout, updateCurrentUser } from '../../currentuser/api-currentuser';
import { push } from 'connected-react-router';

export const currentuserEpic = action$ => action$.pipe(
  ofType(FETCH_CURRENTUSER),
  mergeMap(() => from(auth.isAuthenticated())
    .pipe(
      mergeMap((result) => from(fetchCurrentUser(result.token)))
    ).pipe(
      map(response => succedFetch(response)),
      catchError(error => of(failedFetch(error)))
    ).pipe(
      tap(() => push('/profile'))
    )
  )
);

export const logoutEpic = action$ => action$.pipe(
  ofType(LOGOUT_REQUEST),
  mergeMap(() => from(auth.isAuthenticated())
    .pipe(
      mergeMap((result) => from(logout(result.token)))
    ).pipe(
      tap(() => auth.signout(() => 'bye')),
      map(response => succedLogout(response)),
      catchError(error => of (failedLogout(error)))
    )
  )
);

export const updateCurrentUserEpic = action$ => action$.pipe(
  ofType(UPDATE_CURRENTUSER),
  mergeMap(action => from(auth.isAuthenticated(action))
    .pipe(
      mergeMap((result) => from(updateCurrentUser(result.token, result.action.payload))),
    ).pipe(
      map(response => succedUpdate(response)),
      catchError(error => of(failedUpdate(error.response.data)))
    ).pipe(
      tap(() => push('/update/currentuser')),
    )
  )
);
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { FETCH_CURRENTUSER, succedFetch, failedFetch, LOGOUT_REQUEST, failedLogout, succedLogout, UPDATE_CURRENTUSER, succedUpdate, failedUpdate } from '../actions/currentuser';
import { fetchCurrentUser, logout, updateCurrentUser } from '../../currentuser/api-currentuser';
import { push } from 'connected-react-router';

export const currentuserEpic = action$ => action$.pipe(
  ofType(FETCH_CURRENTUSER),
  mergeMap(() => from(fetchCurrentUser())
    .pipe(
      map(response => succedFetch(response)),
      catchError(error => of(failedFetch(error)))
    ).pipe(
      tap(() => push('/profile'))
    )
  )
);

export const logoutEpic = action$ => action$.pipe(
  ofType(LOGOUT_REQUEST),
  mergeMap(() => from(logout())
    .pipe(
      map(response => succedLogout(response)),
      catchError(error => of(failedLogout(error)))
    )
  )
);

export const updateCurrentUserEpic = action$ => action$.pipe(
  ofType(UPDATE_CURRENTUSER),
  mergeMap(action => from(updateCurrentUser(action.payload))
    .pipe(
      map(response => succedUpdate(response)),
      catchError(error => of(failedUpdate(error.response.data)))
    ).pipe(
      tap(() => push('/update/currentuser')),
    )
  )
);
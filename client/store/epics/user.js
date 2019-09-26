import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchUser, updateUser, deleteUser } from '../../user/api-user';
import { FETCH_USER, succedFetch, failedFetch, UPDATE_USER, succedUpdate, failedUpdate, DELETE_USER, succedDelete, failedDelete } from '../actions/user';
import { push } from 'connected-react-router';

export const userEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action => from(fetchUser(action.payload.id))
    .pipe(
      map(response => succedFetch(response.data)),
      catchError(error => of(failedFetch(error.response)))
    ).pipe(
      tap((action) => push(action.payload.path))
    )
  )
);

export const updateUserEpic = action$ => action$.pipe(
  ofType(UPDATE_USER),
  mergeMap(action => from(updateUser(action.payload.id, action.payload))
    .pipe(
      map(response => succedUpdate(response)),
      catchError(error => of(failedUpdate(error.response.data)))
    ).pipe(
      tap(action => push(action.payload.path)),
    )
  )
);

export const deleteUserEpic = action$ => action$.pipe(
  ofType(DELETE_USER),
  mergeMap(action => from(deleteUser(action.payload.id))
    .pipe(
      map(response => succedDelete(response)),
      catchError(error => of(failedDelete(error)))
    ).pipe(
      tap(action => push(action.payload.path)),
    )
  )
);
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchListUsers, addUser } from '../../users/api-users';
import { FETCH_USERS, succedFetch, failedFetch, ADD_USER, failedCreated, succedCreated } from '../actions/users';
import { push } from 'connected-react-router';

export const usersEpic = action$ => action$.pipe(
  ofType(FETCH_USERS),
  mergeMap(() => from(fetchListUsers())
    .pipe(
      map(response => succedFetch(response)),
      catchError(error => of(failedFetch(error)))
    ).pipe(
      tap(() => push('/users'))
    )
  )
);

export const createUserEpic = action$ => action$.pipe(
  ofType(ADD_USER),
  mergeMap(action => from(addUser(action.payload))
    .pipe(
      map(response => succedCreated(response)),
      catchError(error => of (failedCreated(error.response.data)))
    ).pipe(
      tap(() => push('/add'))
    )
  )
);
import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import auth from '../../auth/auth-helper';
import { fetchListUsers, addUser } from '../../users/api-users';
import { FETCH_USERS, succedFetch, failedFetch, ADD_USER, failedCreated, succedCreated } from '../actions/users';
// import { push } from 'connected-react-router';

export const usersEpic = action$ => action$.pipe(
  ofType(FETCH_USERS),
  mergeMap(() => from(auth.isAuthenticated())
    .pipe(
      mergeMap((result) => from(fetchListUsers(result.token)))
    ).pipe(
      map(response => succedFetch(response)),
      catchError(error => of(failedFetch(error)))
    ).pipe(
      // tap(() => push('/users'))
    )
  )
);

export const createUserEpic = action$ => action$.pipe(
  ofType(ADD_USER),
  mergeMap(action => from(auth.isAuthenticated(action))
    .pipe(
      tap(x => console.log(x)),
      mergeMap((result) => from(addUser(result.token, result.action.payload)))
    ).pipe(
      tap(x => console.log(x)),
      map(response => succedCreated(response)),
      catchError(error => of (failedCreated(error.response.data)))
    )
    // .pipe(
    //   // tap(() => push('/add'))
    // )
  )
);
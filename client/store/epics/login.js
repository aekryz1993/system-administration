import { ofType } from 'redux-observable';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { push } from 'connected-react-router';
import { login } from '../../auth/api-auth';
import { LOGIN_REQUEST, loginSucced, loginFailed } from '../actions/login';

export const loginEpic = action$ => action$.pipe(
  ofType(LOGIN_REQUEST),
  mergeMap(action => from(login(action.payload.username, action.payload.password))
    .pipe( 
      map(response => loginSucced(response)),
      catchError(error => of(loginFailed(error))),
    ).pipe(
      tap(() => push('/'))
    )
  )
);
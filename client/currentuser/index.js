import universal from 'react-universal-component';
import Loading from '../components/Loading';

export const UpdateCurrentUserContainer = universal(() => import('./UpdateCurrentUserContainer'), {
  resolve: () => require.resolveWeak('./UpdateCurrentUserContainer.js'),
  loading: Loading
});

export const CurrentUserContainer = universal(() => import('./currentuserContainer'), {
  resolve: () => require.resolveWeak('./currentuserContainer.js'),
  loading: Loading
});


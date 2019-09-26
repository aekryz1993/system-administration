import universal from 'react-universal-component';
import Loading from '../components/Loading';

export default universal(() => import('./PrivateRoute'), {
  resolve: () => require.resolveWeak('./PrivateRoute.js'),
  loading: Loading
});
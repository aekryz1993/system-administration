import universal from 'react-universal-component';
import Loading from '../components/Loading';

export default universal(() => import('./navbarContainer'), {
  resolve: () => require.resolveWeak('./navbarContainer.js'),
  loading: Loading
});

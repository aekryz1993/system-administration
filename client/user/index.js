import universal from 'react-universal-component';
import Loading from '../components/Loading';

export const UserContainer = universal(() => import('./userContainer'), {
  loading: Loading
});

export const UpdateUserContainer = universal(() => import('./updateUserContainer'), {
  loading: Loading
});

export const DeleteUserContainer = universal(() => import('./deleteUserContainer'), {
  loading: Loading
});

export const Permissions = universal(() => import('./Permissions'), {
  loading: Loading
});

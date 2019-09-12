import universal from 'react-universal-component'
import Loading from '../components/Loading'

export const UsersContainer = universal(() => import('./usersContainer'), {
    loading: Loading
})

export const CreateUserContainer = universal(() => import('./createUserContainer'), {
    loading: Loading
})

import universal from 'react-universal-component'
import Loading from '../components/Loading'

export const UpdateCurrentUserContainer = universal(() => import('./UpdateCurrentUserContainer'), {
    loading: Loading
})

export const CurrentUserContainer = universal(() => import('./currentuserContainer'), {
    loading: Loading
})


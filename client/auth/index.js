import universal from 'react-universal-component'
import Loading from '../components/Loading'

export default universal(() => import('./loginContainer').then(mod => {
    const {LoginContainer} = mod;
    return LoginContainer
}), {
    resolve: () => require.resolveWeak('./loginContainer.js').LoginContainer,
    loading: Loading
})
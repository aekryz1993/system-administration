import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { loginRequest, loginRequestEnded } from '../store/actions/login';
import Login from './Login';
import validate from './validate';

const mapStateToProps = (state, ownProps) => {
  const { message, isAuth, redirect } = state.loginReducer;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    isAuth: isAuth,
    message: message,
    redirect: redirect,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginRequestEnded: () => dispatch(loginRequestEnded())
});

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'login',
  validate,
  onSubmit: (values, dispatch) => dispatch(loginRequest(values.username, values.password))
})(Login)));

export default LoginContainer;
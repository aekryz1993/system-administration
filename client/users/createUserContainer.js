import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startCreateUser, createEnded } from '../store/actions/users';
import { reduxForm } from 'redux-form';
import AddUser from './AddUser';

const mapStateAddUserToProps = (state, ownProps) => {
  const { message, redirect } = state.createUserReducer;
  const { from } = ownProps.location.state;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    from: from,
  };
};

const mapDispatchAddUserToProps = (dispatch, ownProps) => ({
  createUserEnded: () => dispatch(createEnded()),
});

export default withRouter(connect(
  mapStateAddUserToProps,
  mapDispatchAddUserToProps
)(reduxForm({
  form: 'users',
  onSubmit: (values, dispatch) => dispatch(startCreateUser(values))
})(AddUser)));

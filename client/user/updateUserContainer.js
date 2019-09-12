import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startUpdateUser, updateFinished } from '../store/actions/user';
import { reduxForm } from 'redux-form';
import UpdateUser from './UpdateUser';

const mapStateUpdateUserToProps = (state, ownProps) => {
  const { message, redirect } = state.updateUserReducer;
  const { id } = ownProps.match.params;
  const { initialValues } = ownProps.location.state;
  const permissions = initialValues.permission;
  console.log('************************');
  console.log(initialValues);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    userId: id,
    initialValues: initialValues,
    permissions: permissions,
  };
};

const mapDispatchUpdateUserToProps = (dispatch, ownProps) => ({
  updateFinished: () => dispatch(updateFinished())
});

export default withRouter(connect(
  mapStateUpdateUserToProps,
  mapDispatchUpdateUserToProps
)(reduxForm({
  form: 'updateuser',
  onSubmit: (id) => (values, dispatch) => dispatch(startUpdateUser(id, values))
})(UpdateUser)));

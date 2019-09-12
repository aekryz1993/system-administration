import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFinished, startUpdateCurrentUser } from '../store/actions/currentuser';
import { reduxForm } from 'redux-form';
import UpdateCurrentUser from './UpdateCurrentUser';

const mapStateUpdateUserToProps = (state, ownProps) => {
  const { message, redirect } = state.updateCurrentUserReducer;
  const {username, email} = state.currentuserReducer;
  const initialValues = (ownProps.location.state) ? ownProps.location.state.initialValues : {username, email};
  const from = (ownProps.location.state) ? ownProps.location.state.from : '/profile';
  console.log('************************');
  console.log(initialValues);
  console.log('************************');
  return {
    message: message,
    redirect: redirect,
    initialValues: initialValues,
    from: from,
  };
};

const mapDispatchUpdateUserToProps = (dispatch, ownProps) => ({
  updateFinished: () => dispatch(updateFinished())
});

const UpdateCurrentUserContainer = withRouter(connect(
  mapStateUpdateUserToProps,
  mapDispatchUpdateUserToProps
)(reduxForm({
  form: 'updatecurrentuser',
  onSubmit: () => (values, dispatch) => dispatch(startUpdateCurrentUser(values))
})(UpdateCurrentUser)));

export default UpdateCurrentUserContainer
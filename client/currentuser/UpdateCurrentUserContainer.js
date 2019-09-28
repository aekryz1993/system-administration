import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFinished, startUpdateCurrentUser } from '../store/actions/currentuser';
import { reduxForm } from 'redux-form';
import UpdateCurrentUser from './UpdateCurrentUser';

const mapStateUpdateUserToProps = (state, ownProps) => {
  const { message, redirect } = state.updateCurrentUserReducer;
  const initialValues =  (ownProps.history.location.state) ? ownProps.history.location.state.initialValues : '';
  const from = (ownProps.history.location.state) ? ownProps.history.location.state.from : '/profile';
  console.log('************************');
  console.log(ownProps.history.location.state);
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

export default UpdateCurrentUserContainer;
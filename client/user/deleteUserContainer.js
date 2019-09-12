import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { startDeleteUser, deleteFinished } from '../store/actions/user';
import DeleteUser from './DeleteUser';

const mapStateDeleteUserToProps = (state, ownProps) => {
  const { redirect } = state.deleteUserReducer;
  const { id } = ownProps.match.params;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    redirect: redirect,
    userId: id,
  };
};

const mapDispatchDeleteUserToProps = (dispatch, ownProps) => ({
  startDeleteUser: (id) => dispatch(startDeleteUser(id)),
  deleteFinished: () => dispatch(deleteFinished())
});

export default withRouter(connect(
  mapStateDeleteUserToProps,
  mapDispatchDeleteUserToProps,
)(DeleteUser));
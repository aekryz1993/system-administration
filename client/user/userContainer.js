import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './User';
import { startFetchUser } from '../store/actions/user';

const mapStateUserToProps = (state, ownProps) => {
  const { user, updatePermission, deletePermission } = state.userReducer;
  const {url} = ownProps.match;
  console.log('************************');
  console.log(user);
  console.log('************************');
  return {
    user: user,
    updatePermission: updatePermission,
    deletePermission: deletePermission,
    pathname: url,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    fetchUser: () => dispatch(startFetchUser(id))
  };
};

export default withRouter(connect(
  mapStateUserToProps,
  mapDispatchToProps,
)(User));

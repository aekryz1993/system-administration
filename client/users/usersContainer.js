import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Users from './Users';
import { startFetchUsers } from '../store/actions/users';

const mapStateUsersToProps = (state, ownProps) => {
  const { users, addUserPermission } = state.usersReducer;
  const { pathname } = ownProps.location;
  console.log('************************');
  console.log(users);
  console.log('************************');
  return {
    users: users,
    pathname: pathname,
    addUserPermission: addUserPermission,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUsers: () => dispatch(startFetchUsers())
});

export default withRouter(connect(
  mapStateUsersToProps,
  mapDispatchToProps,
)(Users));


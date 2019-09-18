import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';
import { startFetchCurrentUser, logoutRequest, logoutFinished } from '../store/actions/currentuser';

/************** Fetch current user data Container |****| logout Container *********************/

const mapStateToProps = (state, ownProps) => {
  const { username, email } = state.currentuserReducer;
  const { redirect } = state.logoutReducer;
  const { pathname } = ownProps.location;
  console.log('************************');
  console.log(ownProps);
  console.log('************************');
  return {
    username: username,
    email: email,
    redirect: redirect,
    pathname: pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCurrentUser: () => dispatch(startFetchCurrentUser()),
  logoutRequest: () => dispatch(logoutRequest()),
  logoutFinished: () => dispatch(logoutFinished()),
});

const NavbarContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));

export default NavbarContainer;
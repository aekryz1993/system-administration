import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentUser from './Currentuser';
import { startFetchCurrentUser } from '../store/actions/currentuser';

/************** Fetch viewUsers permission from current user data Container *********************/

const mapStateToProps = (state, ownProps) => {
  
  const { viewUsers, addUser } = state.currentuserReducer;
  const { pathname } = ownProps.location;

  console.log('************************');
  console.log(ownProps);
  console.log('************************');

  return {
    viewUsers: viewUsers,
    addUser: addUser,
    pathname: pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCurrentUser: () => dispatch(startFetchCurrentUser()),
});

const CurrentuserContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser));

export default CurrentuserContainer
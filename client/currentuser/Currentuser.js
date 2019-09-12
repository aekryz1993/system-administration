import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profile from '../assets/stylesheets/components/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CurrentUser = ({
  fetchCurrentUser,
  viewUsers,
  addUser,
  pathname,
}) => {


  useEffect(() => {
    fetchCurrentUser();
  }, []);


  return (
    <div className={profile._profile_container} >
      <div className={profile._left_column_item}>
        <div className={profile._title_profile_item}>
          <span>Site administration</span>
        </div>
        <div className={profile._auth_profile_item}>
          {viewUsers && 
            ( <table className={profile._profile_table}>
              <thead>
                <tr >
                  <th className={profile._profile_th}>authontication and authorization</th>
                </tr>
              </thead>
              <tbody className={profile._profile_tbody}>
                <tr className={profile._profile_tbody_tr}>
                  <td className={profile.profile_td}>
                    <div><Link className={profile._user_anchor_profil} to='/users'> users </Link></div> 
                    <div className={profile._user_add_profil}>
                      {addUser && <Link className={profile._user_add_anchor_profil} to={{pathname: '/add', state: {from: pathname}}}><FontAwesomeIcon icon={faPlus}  color="#00C853" /><span className={profile._span}>add</span></Link>}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> )}
        </div>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  viewUsers: PropTypes.bool,
  addUser: PropTypes.bool,
  pathname: PropTypes.string,
  fetchCurrentUser: PropTypes.func.isRequired,
};

export default CurrentUser;
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const DeleteUser = ({redirect, userId, startDeleteUser, deleteFinished}) => {

  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    return () => {
      deleteFinished();
    };
  }, []);

  return (
    <div>
      <button onClick={() => startDeleteUser(userId)}>YES</button>
      {<button onClick={() => setCancel(true)}>CANCEL</button>}

      {redirect && <Redirect to='/users'/>}
      {cancel && <Redirect to={`/user/${userId}`}/>}
    </div>
  );
};

DeleteUser.propTypes = {
  redirect: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  startDeleteUser: PropTypes.func.isRequired,
  deleteFinished: PropTypes.func.isRequired
};

export default DeleteUser;

import { isEmpty } from '../utils/validations';

const validate = values => {
  const { username, password } = values;
  const errors = {};

  if(isEmpty(username)) errors.username = 'Username Required';

  if(isEmpty(password)) errors.password = 'Password Required';

  return errors;
};

export default validate;
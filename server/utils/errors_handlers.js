export const errorHandler = (err) => {
  let error = {};

  if (err.errors['password']) error.password = err.errors['password'].message;

  if (err.errors['username']) error.username = err.errors['username'].message;

  if (err.errors['email']) error.email = err.errors['email'].message;

  if (Object.getOwnPropertyNames(error).length === 0) return err;

  return error;
};
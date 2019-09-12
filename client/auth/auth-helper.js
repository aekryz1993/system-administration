const auth = {
  authenticate(jwt) {
    if (typeof window !== 'undefined')
      localStorage.setItem('jwt', jwt);
  },
  isAuthenticated(action) {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('jwt')) {
        return resolve({
          token: localStorage.getItem('jwt'),
          action: action
        });
      } 
      return reject('DOESN\'T AUTHORIZED');
    });
  },
  signout(cb) {
    if (typeof window !== 'undefined')
      localStorage.removeItem('jwt');
    cb();
  }
};

export default auth;
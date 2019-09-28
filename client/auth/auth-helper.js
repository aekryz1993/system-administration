const auth = {
  authenticate(jwt) {
    if (typeof window !== 'undefined')
      localStorage.setItem('jwt', jwt);
  },
  isAuthenticated(auth) {
    // console.log(auth);
    localStorage.setItem('auth?', auth);
    // if (typeof window !== 'undefined'){
    //   if (sessionStorage.getItem('auth?')) return;
    //   return sessionStorage.setItem('auth?', auth); 
    // }
  },
  signout(cb) {
    if (typeof window !== 'undefined')
      sessionStorage.removeItem('auth?');
    cb();
  }
};

export default auth;
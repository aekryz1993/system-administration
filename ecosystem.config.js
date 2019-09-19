module.exports = {
  app: [{
    name: 'system_administration',
    script: 'run strat:prod',
    args: 'start:prod',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
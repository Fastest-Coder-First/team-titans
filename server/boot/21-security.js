'use strict';
const logger = require('log4js').getLogger('boot/21-security');
const ExpressBrute = require('express-brute');

const enableRateLimiter = (app) => {
  const securityConfig = app.get('security');

  const store = new ExpressBrute.MemoryStore();
  const rateLimiter = new ExpressBrute(
    store,
    securityConfig ? securityConfig.rateLimiter : null,
  );
  // User Login Rate Limiter
  app.use('/api/XUsers/login', rateLimiter.getMiddleware({
    key: (req, res, next) => {
      next(req.body ? req.body.email : null);
    },
  }));
  logger.info('Initialized Rate Limiter', securityConfig ? securityConfig.rateLimiter : null);
};

module.exports = (app) => {
  enableRateLimiter(app);
};


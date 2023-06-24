'use strict';
const logger = require('log4js').getLogger('boot/20-authentication');

const enableAuth = (app) => {
  // enable authentication
  app.enableAuth({
    datasource: 'sql',
  });
  logger.info('Initialized Authentication');
};

module.exports = (app) => {
  enableAuth(app);
};


'use strict';
const logger = require('log4js').getLogger('boot/10-root');

module.exports = function(server) {
  const router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
  logger.info('Initialized Root Route');
};

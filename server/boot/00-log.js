'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();

/**
 * Initializing Logging Library
 */
module.exports = (app) => {
  logger.level = app.get('log').level;
  const logger2 = log4js.getLogger('boot/00-log');
  logger2.info(`Initialized Logger w/ level ${logger.level}`);
};

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const logger = require('log4js').getLogger('server');

const app = module.exports = loopback();

app.use(cookieParser('ms-hackathon'));
app.use(
  helmet({
    xFrameOptions: {action: 'sameorigin'},
  }),
);
app.use(loopback.static('client'));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    logger.info('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      logger.info('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

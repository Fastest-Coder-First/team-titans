'use strict';
const app = require.main.require('./server');
const logger = require('log4js').getLogger('boot/30-dbinit');
const bcrypt = require('bcryptjs');

const automigrateDatabase = async () => {
  logger.debug('Initializing Database Automigration');
  await initSchemes();
  // await initUsers();
  // await initRoles();
  // await initRoleMappings();
};

const initSchemes = () => {
  return new Promise((resolve, reject) => {
    logger.debug('Initializing Database Schemes');
    const sql = app.dataSources.sql;

    const syncModels = [
      'XUser',
      'AccessToken',
      'Role',
      'RoleMapping',
      'ACL',
      'FinanceHistory',
    ];

    let schemeCount = 0;
    const loop = () => {
      const currentModel = syncModels.shift();
      if (!currentModel) {
        logger.info(`Initialized ${schemeCount} Database Schemes`);
        return resolve();
      }

      logger.debug(`Initializing Scheme: ${currentModel}`);
      sql.autoupdate(currentModel, (err) => {
        if (err) {
          logger.error(`Error Initializing Scheme: ${currentModel}`, err);
          return reject(err);
        }
        schemeCount++;
        loop();
      });
    };
    loop();
  });
};

const initRoles = async () => {
  logger.debug('Initializing Roles');
  const roles = [{
    name: 'GENERAL',
    description: 'Basic User',
  }];
  for (const row of roles) {
    await app.models.Role.upsertWithWhere({name: row.name}, row);
  }
  logger.info(`Initialized ${roles.length} Roles`);
};

const initUsers = async () => {
  logger.debug('Initializing Users');
  const roles = [{
    name: 'sarath',
    email: 'sk@sk',
    password: bcrypt.hashSync('test', 10),
    emailVerified: true,
  }];
  for (const row of roles) {
    await app.models.XUser.upsertWithWhere({
      name: row.name,
      email: row.email,
      password: row.password,
      emailVerified: row.emailVerified,
    }, row);
  }
  logger.info(`Initialized ${roles.length} Users`);
};

const initRoleMappings = async () => {
  logger.debug('Initializing RoleMappings');
  const roles = [{
    principalId: 1,
    roleId: 1,
    principalType: 'USER',
  }];
  for (const row of roles) {
    await app.models.RoleMapping.create(row);
  }
  logger.info(`Initialized ${roles.length} Role Mappings`);
};

/**
 * Init SQL Database
 */
module.exports = async (app) => {
  await automigrateDatabase();
};

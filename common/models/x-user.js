'use strict';
const logger = require('log4js').getLogger('common/models/x-user');
const app = require.main.require('./server');
const bcrypt = require('bcryptjs');
const axios = require('axios');

module.exports = function(XUser) {
  // Register a new user and return the access token
  XUser.register = async (credentials, req, res, ctx) => {
    const {name, email, password} = credentials;
    const userExists = await XUser.findOne({
      where: {
        email,
      },
    });
    if (userExists) {
      const err = new Error('User already exists');
      err.statusCode = 409;
      throw err;
    }
    const newUser = await XUser.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    await XUser.app.models.RoleMapping.create({
      principalType: 'USER',
      principalId: newUser.id,
      roleId: 1,
    });
    const loginData = await XUser.login({
      email,
      password,
    });
    logger.info(`User ${email} created successfully!`);
    return {...newUser.toJSON(), ...loginData.toJSON()};
  };

  // Logout user by deleting the access token
  XUser.logout = async (tokenId) => {
    if (!tokenId) {
      const err = new Error('Accesstoken is required to logout');
      err.statusCode = 401;
      throw err;
    }
    try {
      await XUser.app.models.AccessToken.destroyById(tokenId);
    } catch (err) {
      const error = new Error('Unexpected error');
      error.status = 200;
      throw error;
    }
  };

  // Check if requested user is active before handling login request
  XUser.beforeRemote('login', async (ctx, instance) => {
    if (!ctx.req.body || !ctx.req.body.email) {
      const err = new Error('Invalid Credentials');
      err.status = 422;
      throw err;
    }

    const user = await XUser.findOne({
      where: {
        email: ctx.req.body.email,
      },
    });

    if (!user) {
      const err = new Error('Invalid Credentials');
      err.status = 401;
      throw err;
    }

    // Check PW
    const check = await user.hasPassword(ctx.req.body.password);
    if (!check) {
      const err = new Error('Invalid Credentials');
      err.status = 401;
      throw err;
    }
  });

  // Reset Rate Limiter after successful login
  // Calculate dynamic session ttl after login, to log the user out after midnight (UTC) + an offset
  XUser.afterRemote('login', async (ctx, instance) => {
    ctx.req.brute.reset(() => {});
  });

  XUser.remoteMethod('register', {
    description: 'Map a Role to the user',
    http: {
      path: '/register',
      verb: 'POST',
    },
    accepts: [{
      arg: 'credentials',
      type: 'object',
      required: true,
      http: {
        source: 'body',
      },
    }, {
      arg: 'req',
      type: 'object',
      http: {
        source: 'req',
      },
    }, {
      arg: 'res',
      type: 'object',
      http: {
        source: 'res',
      },
    }, {
      arg: 'ctx',
      type: 'object',
      http: {
        source: 'context',
      },
    }],
    returns: {
      arg: 'XUser',
      root: true,
      type: 'XUser',
      description: 'Added XUser instance',
    },
  });

  // Disable not required XUserGroup remote methods
  // XUser.disableRemoteMethodByName('prototype.__get__XUserGroups'); - Active to populate group memberships table in frontend
  // XUser.disableRemoteMethodByName('prototype.__count__XUserGroups');
  XUser.disableRemoteMethodByName('find');
  XUser.disableRemoteMethodByName('create');
  XUser.disableRemoteMethodByName('replaceOrCreate');
  XUser.disableRemoteMethodByName('upsert');

  XUser.disableRemoteMethodByName('findById');
  XUser.disableRemoteMethodByName('replaceById');
  XUser.disableRemoteMethodByName('patchById');
  XUser.disableRemoteMethodByName('deleteById');
  XUser.disableRemoteMethodByName('exists');

  XUser.disableRemoteMethodByName('prototype.__destroyById__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__updateById__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__exists__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__link__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__create__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__update__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__destroy__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__unlink__XUserGroups');
  XUser.disableRemoteMethodByName('prototype.__delete__XUserGroups');

  // Disable not required XUserLicensePeriod remote methods
  XUser.disableRemoteMethodByName('prototype.__findById__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__destroyById__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__updateById__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__exists__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__link__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__create__');
  XUser.disableRemoteMethodByName('prototype.__update__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__destroy__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__unlink__XUserLicensePeriods');
  XUser.disableRemoteMethodByName('prototype.__delete__XUserLicensePeriods');
};

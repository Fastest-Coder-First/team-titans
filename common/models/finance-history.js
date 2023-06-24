'use strict';
const logger = require('log4js').getLogger('common/models/finance-history');

module.exports = function(FinanceHistory) {
  FinanceHistory.observe('access', async (ctx) => {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    if (ctx.query.where) {
      ctx.query.where.createdBy = userId;
    } else {
      ctx.query.where = {createdBy: userId};
    }
  });
};

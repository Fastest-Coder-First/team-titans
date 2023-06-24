'use strict';
const logger = require('log4js').getLogger('common/models/finance-history');

module.exports = function(FinanceHistory) {
  // Observe access to FinanceHistory
  FinanceHistory.observe('access', async (ctx) => {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    if (ctx.query.where) {
      ctx.query.where.createdBy = userId;
    } else {
      ctx.query.where = {createdBy: userId};
    }
  });

  // Observe after save to update balance
  FinanceHistory.observe('after save', async (ctx) => {
    const token = ctx.options && ctx.options.accessToken;
    const userId = token && token.userId;
    const balance = await FinanceHistory.app.models.Balance.findOne({
      where: {
        createdBy: userId,
      },
    });
    if (balance) {
      if (ctx.instance.type === 'income')
        balance.balance = balance.balance + ctx.instance.amount;
      else
        balance.balance = balance.balance - ctx.instance.amount;
      await balance.save();
    } else {
      await FinanceHistory.app.models.Balance.create({
        balance: (ctx.instance.type === 'income') ? ctx.instance.amount : 0 - Number(ctx.instance.amount),
        createdBy: userId,
      });
    }
  });
};

'use strict';
/**
 * Mixin to add created & updated timestamps + user references
 */
module.exports = function(Model, options) {
  Model.defineProperty('createdAt', {
    type: 'date',
    default: '$now',
    index: true,
  });
  Model.defineProperty('updatedAt', {
    type: 'date',
    default: '$now',
    index: true,
  });
  Model.defineProperty('createdBy', {
    type: 'number',
    default: 0,
    index: true,
  });
  Model.defineProperty('updatedBy', {
    type: 'number',
    default: 0,
    index: true,
  });

  Model.dataSource.defineRelations(Model, {
    Creator: {
      type: 'belongsTo',
      model: 'XUser',
      foreignKey: 'createdBy',
    },
    Updater: {
      type: 'belongsTo',
      model: 'XUser',
      foreignKey: 'updatedBy',
    },
  });

  /** Adding updatedAt Timestamp + createdBy/updatedBy user tracking functionality */
  Model.observe('before save', (ctx, next) => {
    // Retrieve userId from context/request
    const userId = (
      ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId ?
        ctx.options.accessToken.userId : 0
    );
    // Skip if skipTimestamps flag set
    if (ctx.options && ctx.options.skipTimestamps) {
      return next();
    }

    if (ctx.instance) {
      // If Update or Create Instance
      ctx.instance.updatedAt = new Date();
      ctx.instance.updatedBy = ctx.instance.updatedBy || userId;
      if (ctx.isNewInstance) {
        ctx.instance.createdAt = ctx.instance.createdAt || new Date();
        ctx.instance.createdBy = ctx.instance.createdBy || userId;
      }
    } else {
      // If Update without instance (partial update, e.g. updateWhere or PATCH)
      ctx.data.updatedAt = new Date();
      ctx.data.updatedBy = ctx.data.updatedBy || userId;
    }
    return next();
  });
};

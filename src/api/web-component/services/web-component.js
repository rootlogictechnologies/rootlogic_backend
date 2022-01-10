'use strict';

/**
 * web-component service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-component.web-component');

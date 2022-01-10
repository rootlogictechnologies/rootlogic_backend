'use strict';

/**
 * web-component router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::web-component.web-component');

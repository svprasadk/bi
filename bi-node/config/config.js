let _ = require('lodash');

process.env.NODE_ENV = 'development'; // development, testing, production

let config = _.merge(require('./env/' + process.env.NODE_ENV + '.js') || {});

module.exports = config;

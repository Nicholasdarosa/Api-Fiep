const morgan = require('morgan');

const logger = morgan('dev'); // ou 'combined' para logs mais detalhados

module.exports = logger;

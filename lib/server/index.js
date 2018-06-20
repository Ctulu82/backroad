const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const installRouter = require('./routes/install');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const createSettingSchema = require('./models/setting');
const createUserSchema = require('./models/user');

/**
 * Initialize Express server instance.
 */
function createServer(options) {
  const server = express();
  const { adminEndpoint, installEndpoint, mongoURL } = options;

  // Create schemas.
  const schemas = {
    User: createUserSchema(),
    Setting: createSettingSchema()
  };

  // Add middleware.
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(cors());

  // Add routes.
  server.use(`/${adminEndpoint}`, adminRouter(options, schemas));
  server.use(`/${installEndpoint}`, installRouter(options, schemas));
  server.use(`/auth`, authRouter(options, schemas));

  // Connect to database.
  mongoose.connect(
    mongoURL,
    function(err) {
      if (err) throw err;
      console.log('🔗 Connected to the database.');
    }
  );

  return server;
}

/**
 * Export server factory function.
 */
module.exports = createServer;

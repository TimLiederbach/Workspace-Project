const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// const workspacesRouter = require('./routes/workspaces');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());

// app.use('api/workspaces', workspacesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

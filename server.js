const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const workspaceRouter = require('./routes/workspacesRouter');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/workspaces', workspaceRouter);
app.get('/', (res, req) => {

  res.send('here!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

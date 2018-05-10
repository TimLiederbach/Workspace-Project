const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const workspaceRouter = require('./routes/workspacesRouter');

const app = express();


const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get('/', (req, res) => {

  res.send('hi')
})

app.use('/workspaces', workspaceRouter);



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

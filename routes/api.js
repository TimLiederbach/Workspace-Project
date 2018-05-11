const apiRouter = require('express').Router();

const workspacesRouter = require('./workspacesRouter');
const authRouter = require('./auth');

apiRouter.use('/workspaces', workspacesRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;

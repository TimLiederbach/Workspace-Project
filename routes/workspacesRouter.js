const workspaceRouter     = require('express').Router();
const workspaceController = require('../controllers/workspacesController');
const responseController  = require('../controllers/responseController');

workspaceRouter.route('/')
  .get(
    workspaceController.getAll,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  .post(
    workspaceController.create,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

  workspaceRouter.route('/:id')
  .get(
    workspaceController.getOne,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  .put(
    workspaceController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

  .delete(
    workspaceController.destroy,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

module.exports = workspaceRouter;


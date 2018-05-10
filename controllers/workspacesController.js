const workspaceDb = require('../models/workspaces');

function getAll(req, res, next) {
  workspaceDb.getAll()
    .then(data=> {
      res.locals.___ = data;
      next();
    })
    .catch(next);
}

function getOne(req, res, next) {
  workspaceDb.getOne(req.params.id)
    .then(data=> {
      res.locals.___ = data;
      next();
    })
    .catch(next);
}

function create(req, res, next) {
  workspaceDb.create(req.body)
    .then(data=> {
      res.locals.___ = data;
      next();
    })
    .catch(next);
}

function destroy(req, res, next) {
  workspaceDb.destroy(req.params.id)
    .then(()=>{
      next()
    })
    .catch(next);
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
};

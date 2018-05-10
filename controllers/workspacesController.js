const workspaceDb = require('../models/workspaces');

function getAll(req, res, next) {

  workspaceDb.getAll()
    .then(data=> {
      res.locals.workspaces = data;
      next();
    })
    .catch(next);
}

// function getAll(req, res, next) {
//   console.log('About to query the DB');
//   workspaceDb.getAll()
//     .then(data => {
//       console.log('Queried DB and got' + data.length + 'results');
//       res.locals.workspaces = data;
//       next();
//     })
//     .catch(err=> {
//       next(err);
//     })
// }

// function getOne(req, res, next) {
//   workspaceDb.getOne(req.params.id)
//     .then(data=> {
//       res.locals.___ = data;
//       next();
//     })
//     .catch(next);
// }

function create(req, res, next) {
  workspaceDb.create(req.body)
    .then(data=> {
      res.locals.workspace = data;
      next();
    })
    .catch(next);
}

// function destroy(req, res, next) {
//   workspaceDb.destroy(req.params.id)
//     .then(()=>{
//       next()
//     })
//     .catch(next);
// }

module.exports = {
  getAll,
  create
};

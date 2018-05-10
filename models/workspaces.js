const db = require('../config/connection');

function getAll() {

  return queryPromise = db.any(`
    SELECT * FROM workspaces`)
}

function getOne(id) {
  return queryPromise = db.one(`
    SELECT * FROM workspaces
    WHERE w_id = $1
    `, id
  );
}

// function create() {
//   return queryPromise = db.one(`
//     INSERT INTO
//   `, )
// }

// function update() {
//   return queryPromise = db.one(`
//   `)
// }

// function destroy() {
//   return queryPromise = db.one(`
//   `)
// }

module.exports = {
  getAll,
  getOne

};

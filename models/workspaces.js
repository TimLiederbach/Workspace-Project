const db = require('../config/connection');

function getAll() {
  console.log('models')
  return queryPromise = db.any(`
    SELECT * FROM workspaces`)
}

// console.log(getAll);

// function getOne(id) {
//   return queryPromise = db.one(`
//     SELECT * FROM
//     WHERE id = $1
//     `, id
//   );
// }

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
  getAll

};

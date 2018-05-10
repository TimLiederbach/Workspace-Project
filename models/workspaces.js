const db = require('../config/connection');

// function getAll() {
//   console.log('models')
//   return queryPromise = db.any(`
//     SELECT * FROM workspaces`)
// }

function getAll() {
  const queryPromise = db.any(`
    SELECT * FROM workspaces`);
  return queryPromise;
}

// console.log(getAll);

// function getOne(id) {
//   return queryPromise = db.one(`
//     SELECT * FROM
//     WHERE id = $1
//     `, id
//   );
// }

function create(workspace) {
  return queryPromise = db.one(`
    INSERT INTO workspaces
    (creator_id, w_name, address, photo, type_of_space, power_outlets, noise_level, wifi_speed, dogfriendly, comments, overall_rating)
    VALUES
    ($/creator_id/, $/w_name/, $/address/, $/photo/, $/type_of_space/, $/power_outlets/, $/noise_level/, $/wifi_speed/, $/dogfriendly/, $/comments/, $/overall_rating/)
    RETURNING *
    `, workspace
    );
}

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
  create
};

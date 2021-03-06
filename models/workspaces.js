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

function update(workspace) {
  return queryPromise = db.one(`
    UPDATE workspaces
    SET w_name = $/w_name/,
    address = $/address/,
    photo = $/photo/,
    type_of_space = $/type_of_space/,
    power_outlets = $/power_outlets/,
    noise_level = $/noise_level/,
    wifi_speed = $/wifi_speed/,
    dogfriendly = $/dogfriendly/,
    comments = $/comments/,
    overall_rating = $/overall_rating/
    WHERE w_id = $/w_id/
    RETURNING *
    `, workspace);
}

function destroy(id) {
  return queryPromise = db.none(`
    DELETE FROM workspaces WHERE w_id = $1
    `, id
  );
}

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
};

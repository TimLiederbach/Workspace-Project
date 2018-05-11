const db = require('../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 12;

function register(credentials)  {
  console.log('model-users credentials: ', credentials);
  return bcrypt.hash(credentials.password, saltRounds)
  .then(hash => {
    const newUser = {
      username: credentials.username,
      email: credentials.email,
      password: hash
    };
    console.log('model-users - after hashing: ', newUser);
    return db.one(`
      INSERT INTO users (username, email, password)
      VALUES ($/username/, $/email/, $/password/)
      RETURNING u_id, username, email
      `, newUser)
  });
}

function findByUsername(username) {
  console.log(`about to check database for ${username}`)
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
    `, username);
}

function login (credentials)  {
  console.log(credentials)
  return findByUsername(credentials.username)
  .then(username => {

    console.log(username)
    return bcrypt.compare(credentials.password, username.password)
    .then(match => {
      if(!match) throw new Error('Credentials do not match');
      console.log('before delete')
      delete username.password;
      return username;
    })
  })

}

module.exports = {
  register,
  login
}


















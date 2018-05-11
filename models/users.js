const db = require('../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 12;

function register(credentials)  {
  return bcrypt.hash(credentials.password, saltRounds)
    .then(hash => {
      const newUser = {
          username: credentials.username,
          email: credentials.email,
          password: hash
      };
      return db.one(`
        INSERT INTO users (username, email, password)
        VALUES ($/username/, $/email/, $/password/)
        RETURNING id, username, email
        `, newUser)
    });
}

function findByUsername(username) {
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
    `, username);
}

function login (credentials)  {
  return findByUsername(credentials.username)
    .then(user => (
      bcrypt.compare(credentials.password, user.password)
      .then(match => {
        if(!match) throw new Error('Credentials do not match');
        delete user.password;
        return user;
      })
    ));
}

module.exports = {
  register,
  login
}


















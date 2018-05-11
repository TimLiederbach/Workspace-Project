const authRouter = require('express').Router();
const authController = require('../controllers/authController');

// authRouter.post('/register', (req, res) => {
//   res.send(`Register new user with username ${req.body.username} and pw ${req.body.password}`);
// });

// authRouter.post('/login', (req, res) => {
//   res.send (`Login in user with email ${req.body.email} and pw ${req.body.password}`);
// });

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;

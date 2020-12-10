var createError = require('http-errors')
var express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

router.get('/login', [
  check('email').isEmail(),
  check('password').isLength({ min: 8 })
], (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let body = req.body;
  userController.login(body)
    .then((data) => {
      res.json(data);
    }, (err) => {
      return next(createError(500, err))
    })
});

router.post('/sign-in', [
  check('email').isEmail(),
  check('password').isLength({ min: 8 }),
  check('name').isLength({ min: 3 })], (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let body = req.body;
    userController.signIn(body).then((data) => {
      res.json(data);
    }, (err) => {
      return next(createError(500, err))
    })
  });



module.exports = router;
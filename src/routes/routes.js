var createError = require('http-errors')
var express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
var session = require('express-session')

/** login */
router.get('/login', [check('email').isEmail(), check('password').isLength({ min: 8 })], (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let body = req.body;
  userController.login(body)
    .then((data) => {
      req.session.email = data[0].email
      console.log(req.session)
      res.json(data);
    }, (err) => {
      return next(createError(500, err))
    })
});

/** Sign In */
router.post('/sign-in', [check('email').isEmail(), check('password').isLength({ min: 8 }),
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

/** Sign In */
router.post('/logout', (req, res, next) => {

  req.session.destroy();
  res.json({ message: 'Hasta luego ' });

});


router.get('/restaurants', [check('email').isEmail(), check('city').isLength({ min: 2 })], (req, res, next) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  sess = req.session;
  if (sess.email == req.body.email) {
    res.json({ restaurats: [] });
  }
  else {
    return next(createError(401, "Debe iniciar sesión primero"))
  }
});





module.exports = router;
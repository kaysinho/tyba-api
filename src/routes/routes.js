var express = require('express');
const Query = require('../mysql/mysql');
var router = express.Router();
const mysql = require('../mysql/mysql')
router.get('/users', (req, res, next) => {
  let query = "SELECT * FROM users";
  mysql(query).then((data) => {
    console.log('Llega la data ', data)
    res.json(data);
  })
});



module.exports = router;
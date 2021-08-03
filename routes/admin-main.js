const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router()

const rootDir = require('../util/path');
const { writeFile } = require('fs');

require('dotenv').config()

const isLoggedInCheck = require('../middleware/is-logged-in')
const isAdminCheck = require('../middleware/isAdmin')


//serve HTML:
router.get('/admin-products', isLoggedInCheck, isAdminCheck, (req, res, next) =>{
  console.log('welcome to admin page - products');
  
  console.log('is this the real admin?')
  console.log(req.admin)
  res.sendFile(path.join(rootDir, 'views', 'admin-panel-products.html'))
})
router.get('/admin-orders', isLoggedInCheck, isAdminCheck, (req, res, next) =>{
  console.log('welcome to admin page - orders');
  res.sendFile(path.join(rootDir, 'views', 'admin-panel-orders.html'))
})
router.get('/admin-questions', isLoggedInCheck, isAdminCheck,(req, res, next) =>{
  console.log('welcome to admin page - questions');
  
  res.sendFile(path.join(rootDir, 'views', 'admin-panel-questions.html'))


  
})

module.exports = router



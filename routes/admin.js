const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    console.log('in the last middleware');
});

router.post('/add-product', (req,res,next) => {
    console.log(req.body) ;
    res.redirect('/');
});

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'successful.html'));
  });
  
  router.get('/bookcall', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'bookcall.html'));
  });
  
  router.post('/bookcall', (req, res, next) => {
    console.log(req.body);
    res.redirect('successfull');
  });

module.exports = router;
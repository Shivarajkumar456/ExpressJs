const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST"><label>title: </label><input type="text" name="title"><label>size: </label><input type="number" name="size"><button type="submit">Add Product</button></form>')
    console.log('in the last middleware');
});

router.post('/product', (req,res,next) => {
    console.log(req.body) ;
    res.redirect('/');
});

module.exports = router;
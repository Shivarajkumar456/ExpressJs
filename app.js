const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in th middleware');
    next(); // this allows request to continue the next middleware.
});

app.use((req,res,next)=> {
    console.log('in the other middleware!');
    res.send('<h1>This is first Express page</h1>');
})

app.listen(3000);
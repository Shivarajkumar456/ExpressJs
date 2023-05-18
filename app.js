const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminrouter = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminrouter);
app.use(shopRoute);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'error-page.html'));
});

app.listen(3000);
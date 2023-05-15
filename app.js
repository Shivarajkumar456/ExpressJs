const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminrouter = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminrouter);
app.use(shopRoute);

app.listen(3000);
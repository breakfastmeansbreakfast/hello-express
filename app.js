const express = require('express');
const helloWorld = require('./controllers/helloWorld');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const createShoppingList = require('./controllers/createShoppingList');

app.get('/', helloWorld);

app.post('/shoppingLists', createShoppingList);

// app.listen(3000, () => console.log('Example app listening on port 3000!'));

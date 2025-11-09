const express = require('express');
require('dotenv').config();

//create express server
const app = express();

//Public dir
app.use(express.static('public'));

//Routes
app.use('/api/auth', require('./routes/auth'));
//TODO: auth// create, login, renew
//TODO: CRUD: events

//Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

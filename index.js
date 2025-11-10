const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

//create express server
const app = express();

//DataBase
dbConnection();

//CORS
app.use(cors());

//Public dir
app.use(express.static('public'));

//Reading and parsing body
app.use(express.json());

//Routes
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: events

//Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

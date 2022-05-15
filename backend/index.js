const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./routes');

const connection = mysql.createConnection({
  host     : 'mysql-databasetest.alwaysdata.net',
  user     : '268069_wt',
  password : 'WTassignment4',
  database : 'databasetest_wt_assignment'
});

connection.connect();

const port = 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(routes(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
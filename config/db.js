const { createConnection } = require('mysql2');

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'spikey11',
  database: 'company_db'
});

module.exports = connection;

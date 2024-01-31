const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL Connection Configuration
const dbConfig = {
    host: 'localhost',
    user:'root',
    password:'',
    database: 'infoDB'
};

const connection = mysql.createConnection(dbConfig);

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Route for SELECT with WHERE clause
app.get('/select', (req, res) => {
  const userId = 'Onkar'; // Replace with the desired user ID
  const query = 'SELECT * FROM infoTB WHERE fname = ?';

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error executing SELECT query:', err);
      res.status(500).send('Internal Server Error');
    }
      res.json(results);
      console.log("Output:");
      console.table(results)
    
  });
});

// Route for SELECT with ORDER BY clause
app.get('/orderBy', (req, res) => {
  const query = 'SELECT * FROM InfoTB ORDER BY fname';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing SELECT query with ORDER BY:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// Route for DROP TABLE
app.get('/dropTable', (req, res) => {
  const tableName = 'example_table'; // Replace with the desired table name
  const query = `DROP TABLE IF EXISTS ${tableName}`;

  connection.query(query, (err) => {
    if (err) {
      console.error('Error executing DROP TABLE query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`Table ${tableName} dropped successfully`);
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Start XAMPP and MySql
// localhost:3000/select

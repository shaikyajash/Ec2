const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection configuration
const dbConfig = {
    host: 'database-2.c98u6iueeylk.us-east-1.rds.amazonaws.com',    // RDS Endpoint or localhost
    user: 'admin',            // MySQL username
    password: 'RamanGoyal1',    // MySQL password
    database: 'database2',    // Database name
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ', err.message);
        process.exit(1); // Exit the app if there's a connection error
    }
    console.log('Connected to the MySQL database.');
});

// Define a route to fetch data
app.get('/fetch-data', (req, res) => {
    const query = 'SELECT * FROM Node'; // Replace 'your_table' with your actual table name
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ error: 'Failed to fetch data hiii' });
        }
        res.json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

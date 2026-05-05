const express = require('express');
const mysql = require('mysql');
const app = express();

app.get('/user', (req, res) => {
    const connection = mysql.createConnection({host: 'localhost', user: 'root'});
    
    const userId = req.query.id; 
    
    const sql = "SELECT * FROM users WHERE id = " + userId;
    
    connection.query(sql, (err, result) => {
        res.send(result);
    });
});

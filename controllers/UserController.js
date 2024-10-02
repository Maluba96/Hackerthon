const db = require('../config/db');


exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;

    const sql = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        res.status(201).send('User registered successfully');
    });
};


exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM Users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err || result.length === 0) {
            return res.status(400).send('Invalid credentials');
        }
        res.status(200).send('User logged in');
    });
};

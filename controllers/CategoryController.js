const db = require('../db');


exports.getCategories = (req, res) => {
    const sql = 'SELECT * FROM Categories';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching categories');
        }
        res.json(results);
    });
};

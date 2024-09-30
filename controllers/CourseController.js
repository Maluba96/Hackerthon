// courseController.js
const db = require('../db');

// Add New Course
exports.addCourse = async (req, res) => {
    const { title, description, price, category_id } = req.body;

    const sql = 'INSERT INTO Courses (title, description, price, category_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, price, category_id], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding course');
        }
        res.status(201).send('Course added successfully');
    });
};

// Get All Courses
exports.getCourses = (req, res) => {
    const sql = 'SELECT * FROM Courses';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching courses');
        }
        res.json(results);
    });
};

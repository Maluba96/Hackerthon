const db = require('../config/db');


exports.addTestimonial = (req, res) => {
    const { user_id, course_id, testimonial_text } = req.body;

    const sql = 'INSERT INTO Testimonials (user_id, course_id, testimonial_text) VALUES (?, ?, ?)';
    db.query(sql, [user_id, course_id, testimonial_text], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding testimonial');
        }
        res.status(201).send('Testimonial added successfully');
    });
};

// Get All Testimonials
exports.getTestimonials = (req, res) => {
    const sql = 'SELECT * FROM Testimonials';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching testimonials');
        }
        res.json(results);
    });
};

// routes.js
const express = require('express');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const courseController = require('./controllers/courseController');
const testimonialController = require('./controllers/testimonialController');

const router = express.Router();

// User Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Category Routes
router.get('/categories', categoryController.getCategories);

// Course Routes
router.post('/courses', courseController.addCourse);
router.get('/courses', courseController.getCourses);

// Testimonial Routes
router.post('/testimonials', testimonialController.addTestimonial);
router.get('/testimonials', testimonialController.getTestimonials);

module.exports = router;

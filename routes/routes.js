// routes.js
const express = require('express');
const userController = require('../controllers/UserController');
const categoryController = require('../controllers/CategoryController');
const courseController = require('../controllers/CourseController');
const testimonialController = require('../controllers/TestimonialController');

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

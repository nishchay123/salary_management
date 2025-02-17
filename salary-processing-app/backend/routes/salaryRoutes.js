const express = require('express');
const router = express.Router();
const { processSalary } = require('../controllers/salaryController');

router.post('/process', processSalary);

module.exports = router;


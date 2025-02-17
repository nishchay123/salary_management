const express = require('express');
const router = express.Router();
const { addEmployee, getEmployees } = require('../controllers/employeeController');

router.post('/add', addEmployee);
console.log("employee route");
router.get('/', getEmployees);

module.exports = router;


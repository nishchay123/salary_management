const Employee = require('../models/employee');

exports.addEmployee = async (req, res) => {
  const { name, position, baseSalary } = req.body;
  const newEmployee = new Employee({ name, position, baseSalary });

  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add employee' });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    console.log("in get employees");
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
};


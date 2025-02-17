const Salary = require('../models/salary');
const Employee = require('../models/employee');

exports.processSalary = async (req, res) => {
  const { employeeId, bonus, overtime, deductions } = req.body;

  const employee = await Employee.findById(employeeId);
  if (!employee) return res.status(404).json({ message: 'Employee not found' });

  const netSalary = employee.baseSalary + bonus + overtime - deductions;

  const salary = new Salary({
    employeeId,
    baseSalary: employee.baseSalary,
    bonus,
    overtime,
    deductions,
    netSalary
  });

  try {
    await salary.save();
    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({ message: 'Salary processing failed' });
  }
};


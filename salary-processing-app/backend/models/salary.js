const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  baseSalary: { type: Number },
  bonus: { type: Number },
  overtime: { type: Number },
  deductions: { type: Number },
  netSalary: { type: Number },
  payDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Salary', salarySchema);


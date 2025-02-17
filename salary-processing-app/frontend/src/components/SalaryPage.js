import React, { useState } from 'react';
import axios from 'axios';

const SalaryPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [baseSalary, setBaseSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [overtime, setOvertime] = useState('');
  const [deductions, setDeductions] = useState('');

  const processSalary = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/salary/process', {
        employeeId,
        bonus,
        overtime,
        deductions,
      });
      alert('Salary processed!');
    } catch (error) {
      alert('Salary processing failed');
    }
  };

  return (
    <div>
      <h1>Process Salary</h1>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Bonus"
        value={bonus}
        onChange={(e) => setBonus(e.target.value)}
      />
      <input
        type="number"
        placeholder="Overtime"
        value={overtime}
        onChange={(e) => setOvertime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
      />
      <button onClick={processSalary}>Process</button>
    </div>
  );
};

export default SalaryPage;


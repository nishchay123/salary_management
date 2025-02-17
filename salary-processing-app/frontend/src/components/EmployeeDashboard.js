import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    baseSalary: '',
    hireDate: '',
    active: true,
  });

  // Fetch employees on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      console.log("enter fetch employees ");
      const res = await axios.get('http://localhost:3000/api/employees');
      console.log("login response ", res.data);
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/employees', newEmployee);
      console.log('Employee added:', res.data);
      setEmployees((prevEmployees) => [...prevEmployees, res.data]);
      setNewEmployee({
        name: '',
        position: '',
        baseSalary: '',
        hireDate: '',
        active: true,
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <h2>Add New Employee</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            placeholder="Enter employee name"
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={newEmployee.position}
            onChange={handleInputChange}
            placeholder="Enter employee position"
            required
          />
        </div>
        <div>
          <label>Base Salary:</label>
          <input
            type="number"
            name="baseSalary"
            value={newEmployee.baseSalary}
            onChange={handleInputChange}
            placeholder="Enter base salary"
            required
          />
        </div>
        <div>
          <label>Join Date:</label>
          <input
            type="date"
            name="hireDate"
            value={newEmployee.hireDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Active:</label>
          <input
            type="checkbox"
            name="active"
            checked={newEmployee.active}
            onChange={() => setNewEmployee((prevState) => ({
              ...prevState,
              active: !prevState.active,
            }))}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>

      <h2>Employees List</h2>
      {employees.length > 0 ? (
        employees.map((emp) => (
          <div key={emp._id}>
            <p>{emp.name} - {emp.position}</p>
            <p>Salary: {emp.baseSalary}</p>
            <p>Join Date: {new Date(emp.hireDate).toLocaleDateString()}</p>
            <p>Status: {emp.active ? 'Active' : 'Inactive'}</p>
          </div>
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeDashboard;

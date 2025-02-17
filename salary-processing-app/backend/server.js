const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const salaryRoutes = require('./routes/salaryRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
console.log('Starting server setup...');

app.use('/api/employees', employeeRoutes);
console.log("index routing");
app.use('/api/salary', salaryRoutes);

// Define the login route
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  console.log("login");
  // Simple login logic for example purposes
  if (username === 'admin' && password === 'password123') {
    // Send a mock token if credentials match
    return res.json({ token: 'your_mock_token' });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});mongodb:

mongoose.connect('mongodb://localhost:27017/garage_salary', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB', mongoose.connection.name))
  .catch(err => console.error('Connection error:', err));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


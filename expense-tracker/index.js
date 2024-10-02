const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');
const Expense = require('./models/Expense');
const Category = require('./models/Category');
const PaymentMethod = require('./models/PaymentMethod');
const Budget = require('./models/Budget');
// My end
const bcrypt = require('bcryptjs');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
// My end
app.use(cors());
// dotenv.config();

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync all models with the database
sequelize
  .sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing models:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');

const { employeeFormPage, addEmployee, allEmployeePage } = require("../controllers/emp.controller");

const empRoute = express.Router();

empRoute.get('/', employeeFormPage);
empRoute.post('/addEmp', addEmployee);
empRoute.get('/allEmployeePage', allEmployeePage);

module.exports = empRoute;
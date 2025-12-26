const express = require('express');

const { employeeFormPage } = require("../controllers/emp.controller");

const empRoute = express.Router();

empRoute.get('/', employeeFormPage);

module.exports = empRoute;
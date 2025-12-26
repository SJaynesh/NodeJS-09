const Employee = require("../models/emp.model");

const employeeFormPage = (req, res) => {
    return res.render('empForm');
}

// Insert Employee
const addEmployee = async (req, res) => {
    console.log("Insert EMP");
    console.log(req.body);

    const addEmp = await Employee.create(req.body);

    if (addEmp) {
        console.log("Employee inserted succussfully......");
    } else {
        console.log("Employee insertion failed...");
    }

    return res.redirect('/employee');
}

// All Employee
const allEmployeePage = async (req, res) => {

    const allEmp = await Employee.find();

    return res.render('allEmployeePage', { allEmp });
}

module.exports = {
    employeeFormPage,
    addEmployee,
    allEmployeePage
}
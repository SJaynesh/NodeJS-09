const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/EMP_Management";

mongoose.connect(URI).then(() => {
    console.log("DB is connected...");
}).catch(err => {
    console.log("DB is not connected..", err);
});
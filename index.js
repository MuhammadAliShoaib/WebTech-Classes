const mongoose = require('mongoose');
const {Student} = require("./models/student");
const {Head} = require("./models/head");
const {Mark} = require("./models/mark");
const {Grade} = require("./models/grade");

(async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/recapsheet");
})();

module.exports = {
    Student,
    Head,
    Mark,
    Grade,
}
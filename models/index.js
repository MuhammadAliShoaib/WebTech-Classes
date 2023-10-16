const mongoose = require('mongoose');
const {Student} = require("./student");
const {Head} = require("./head");
const {Mark} = require("./mark");
const {Grade} = require("./grade");

(async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/recapsheet");
})();

module.exports = {
    Student,
    Head,
    Mark,
    Grade,
}
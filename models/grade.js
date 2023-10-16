const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const gradeSchema = new Schema({
        gradeid: Number,
        start: Number,
        end: Number,
        grade: String,
        gpa: Number
})

exports.Grade = model('Grade', gradeSchema);
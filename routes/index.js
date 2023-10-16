var express = require('express');
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get('/', async (req, res, next)=> {
  const heads = await db.Head.find().sort({hid:1});
  const grades = await db.Grade.find();
  const students = await db.Student.find().populate("marks");
  res.render('index', { title: 'Express',students,heads ,grades});
});

module.exports = router;

const express = require("express");
const router = express.Router();


router.get("/form",(req,res)=>{
    res.render('form')
    res.end()
})

router.get('/xhr-action', (req, res)=>{
    let num = Number(req.query.num) * 2 ;
    res.json({num})
})

module.exports = router;
const db = require("./models");


// db.Student.find().then(students =>{
//     students.map(async student=>{
//         const ids = await db.Mark.find({regno:student.regno}).select({_id:1});

//         const result = await db.Student.updateOne({regno:student.regno},{
//             $push:{
//                 marks:ids
//             }
//         })
//     })
// })

// (async ()=>{
//     const results = await db.Student.find();
//     console.log(JSON.stringify(results,null,"\t"));
//     process.exit();
// })();
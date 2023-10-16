const db = require("./index");
const { Student } = require("./models/student");
const { Mark } = require("./models/mark");


// Student.find().then(students=>{
//     students.map(async student=>{
//         let result = await Mark.updateMany({regno:student.regno},{
//             $set:{
//                 student:student._id,
//             }
//         })
//         console.log(result)
//     })
// })

// db.Head.find().then(heads=>{
//     heads.map(async head=>{
//         let result = await Mark.updateMany({hid:head.hid},{
//             $set:{
//                 head:head._id,
//             }
//         })
//         console.log(result)
//     })
// })

// db.Student.find().then(students=>{
//     students.forEach(async student=>{
//         let ids = await Mark.find({regno:student.regno}).select({_id:1});
        
//          let result = await db.Student.updateOne({regno:student.regno},{
//             $push:{
//                 marks:ids
//             }
//          })
//     })
// })


db.Student.aggregate([
    {
        $lookup:{
            from:"marks",
            localField:"regno",
            foreignField:"regno",
            as:"marks"
        }
    },
    {
        $unwind:"$marks"
    },
    {
        $group:{
            _id:{regno:"$regno",name:"$name"},
            total:{$sum:"$marks.marks"}
        }
    },
    {
        $project:{
            _id:0,
            regno:"$_id.regno",
            name:"_id.$name",
            total:"$total"
        }
    }
])
.then((res)=>console.log(JSON.stringify(res, null, "\t")))
.then(()=>process.exit())

// (async () => {
//     const marks = await Student.find()
//     console.log(JSON.stringify(marks, null, "\t"));
//     process.exit();
// })();

const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const markSchema = new Schema({
        mid: Number,
        regno: String,
        hid: Number,
        marks: Number,
        student : {
                type : Schema.Types.ObjectId,
                ref : 'Student'
        },
        // head : {
        //         type : Schema.Types.ObjectId,
        //         ref : 'Head'
        // } 
})

// markSchema.pre("find",function(){
//         this.populate({path:"student",select:"name -_id"});
//         this.populate({path:"head",select:"headname -_id"});
// })

exports.Mark = model('Mark', markSchema);
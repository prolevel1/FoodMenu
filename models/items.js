const mongoose = require('mongoose');
//var ObjectId = require('mongodb').ObjectID;
var Schema = mongoose.Schema;
// const categorySchema = new Schema({
//     categoryName:{
//         type: String,
//         required:true

//     },
//     Descrip:{
//         type: String,
    

//     }
// });
const itemSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    code:{
        type: String,
        required:true,
        unique:true,
        maxlength:8

    },
    itemName:{
        type: String,
        required:true,
        unique:true,

    },
    price:{
        type: Number,
        required:true,

    },
    category:{
        //type:mongoose.Schema.Types.ObjectId,
       type:Object,
        ref: 'Category',
        required: true
    },
   

    // ItemType:{

    // },
    isCustomisable:{
        type: Boolean,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    },
    Description:{
        type: String,
        

    },
    OrderingImage:{
        type: String,
        
    }
    
});


module.exports = mongoose.model('Item', itemSchema);


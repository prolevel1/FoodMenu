const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    categoryName:{
        type: String,
        required:true

    },
    Descrip:{
        type: String,
    

    },
    isAct:{
        type: Boolean

    }


});
module.exports  = mongoose.model('Category', categorySchema);
const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const categories = require('../models/category');


router.get('/findByCategory/:categoryName', async(request, response) =>{
  categoryName = request.params.categoryName;
  //console.log(categoryName);
  let res = [];
  let list = await Item.find({isActive : true});
  for (var i = 0; i < list.length; i++) {
    
    
  for(var j = 0; j <  list[i].category.length; j++){
  
   if(list[i].category[j].categoryName == categoryName){
    res.push(list[i]);
   }
  }
    
         
     
         
 }
 response.json(res);

})


//add item
router.post('/',  async (req,res) => {
    const it = new Item({
        name:req.body.name,
        code:req.body.code,
        itemName:req.body.itemName,
        price:req.body.price,
        category:req.body.category,
        isCustomisable:req.body.isCustomisable,
        isActive:req.body.isActive,
        Description:req.body.Description,
        OrderingImage:req.body.OrderingImage
    });
    try {
        const newS = await it.save()
        res.status(201).json({message:"Added"});
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
});


//get all items
router.get('/all', async (req,res) => {
    try{
        const categor = await Item.find();
        res.json(categor);
    }catch(err){
      res.status(500).json({ message: err.message })
    }
});


//update the items
router.put('/updateItem/:id', async (req,res) =>{
  try{
    const item = await Item.findByIdAndUpdate({_id:req.params.id}, req.body);
   res.json({message:"Item update",
              updatedItem : item});
  }
  catch(err){
    res.json({message:err});
  }

})


//delete the items
router.delete('/deleteItem/:itId', async (req,res) =>{
  try{
      const removedata = await Item.findOneAndUpdate({_id: req.params.itId},{
        $set:{
          isActive : false
        }
      });
      res.json({message: "deleted"});
  }
  catch(err){
      res.json({message: err});
  }
});
module.exports=router;
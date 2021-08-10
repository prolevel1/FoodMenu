const express = require('express');
const router = express.Router();
const Item = require('../models/items');
const categories = require('../models/category');

//fetching all category  by itemId
router.get('/:id', async (req,res) =>{
  try{
    const it = await Item.findById({_id: req.params.id});
   // console.log(req.params.itemName);
    res.json(it);
   
  }catch(err){
    res.json({message:err});
  }
});


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
router.get('/itemss', async (req,res) => {
    try{
        const categor = await Item.find();
        res.json(categor);
    }catch(err){
      res.status(500).json({ message: err.message })
    }
});


//update the items
router.put('/:id', async (req,res) =>{
  try{
    const ite = await Item.findByIdAndUpdate({_id:req.params.id},{
      $set:{
        name:req.body.name,
        code:req.body.code,
        itemName:req.body.itemName,
        price:req.body.price,
        category:req.body.category,
        isCustomisable:req.body.isCustomisable,
        isActive:req.body.isActive,
        Description:req.body.Description,
        OrderingImage:req.body.OrderingImage

      }
    
    })
    res.json({message:"updated"});
  }
  catch(err){
    res.json({message:err});
  }

})


//delete the items
router.delete('/:itId', async (req,res) =>{
  try{
      const removedata = await Item.remove({_id: req.params.itId });
      res.json({message: "deleted"});
  }
  catch(err){
      res.json({message: err});
  }
});
module.exports=router;
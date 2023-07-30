import express from "express"
import db from "../models";
const router = express.Router();

router.post("/",async(req,res)=>{
    
   try {
       const data = await db.User.create({
           ...req.body
       })
       res.status(200).json(data)
   } catch (error) {
       console.log(error);   
   }
})

router.get("/",async(req,res)=>{
    try {
        const data = await db.User.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);   
    }
})

router.get("/:id",async(req,res)=>{
    try { 
        //const user = db.User
        const data = await db.User.findOne({
           where:{
               id:req.params.id
           }
        })
        res.status(200).json(data)
    } catch (error) {
        console.log(error);   
    }
})

router.put("/:id",async(req,res)=>{
    try { 
        //const user = db.User
        const userdata = await db.User.findOne({
           where:{
               id:req.params.id
           }
        })
        
        if(req.body.name){
         userdata.name = req.body.name
        }
        if(req.body.email){
            userdata.email = req.body.email
        }
        if(req.body.password){
         userdata.password = req.body.password
        }   
        await userdata.save()
        res.status(200).json({"msg":'successfully updated'})
    } catch (error) {
        console.log(error);   
    }
})

router.delete("/:id",async(req,res)=>{
    try { 
        //const user = db.User
        const deleteData = await db.User.destroy({
           where:{
               id:req.params.id
           }
        })
        res.status(200).json({"msg":'successfully delete'})
    } catch (error) {
        console.log(error);   
    }
})

module.exports = router
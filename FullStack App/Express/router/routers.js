const express = require("express");
const router=express.Router();
const connection = require("../db/dbconnection");

router.get("/products",(req,resp)=>{
    connection.query("select * from product",(err,data)=>{
        if(err){
            resp.status(500).send("Data not found"+JSON.stringify(err))
            console.log("error occured"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/products/product/:pid",(req,resp)=>{
    connection.query("select * from product where pid =?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("Data not found"+JSON.stringify(err))
        }
        else{
            resp.send(data[0]);
        }

    })
})

router.post("/products/product/:pid",(req,resp)=>{
    connection.query("insert into product values(?,?,?)",[req.body.pid,req.body.pname,req.body.price],(err,data)=>{
        if(err){
            resp.status(500).send("Data not found"+JSON.stringify(err))
        }
        else{
            resp.send("'msg':'added successfully'");
        }
    })
})

router.put("/products/product/:pid",(req,resp)=>{
    connection.query("update product set pname=?,price=? where pid=?",[req.body.pname,req.body.price,req.body.pid],(err,data)=>{
        if(err){
            resp.status(500).send("Data not found"+JSON.stringify(err))
        }
        else{
            resp.send("'msg':'updated successfully'");
        }
    })
})

router.delete("/products/product/:pid",(req,resp)=>{
    console.log("hello")
    
    connection.query("delete from product where pid=?",[parseInt(req.params.pid)],(err,data)=>{
        if(err){
            resp.status(500).send("Data not found"+JSON.stringify(err))
        }
        else{
            resp.send("'msg':'deleted successfully'");
        }
    })
})


module.exports=router;
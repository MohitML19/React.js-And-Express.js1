const express =require("express");
const app=express();
const bodyparser =require("body-parser");
const router =require("./router/routers.js")
const cors =require("cors");
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/",router);

app.listen(3002,function(){
    console.log("Server running at port 3002");
})

module.exports=app;
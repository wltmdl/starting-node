const server=require("./app");

server.get("/",(req,res)=>{return res.end();})

server.listen(5050,()=>console.log("express: ON"));

//npm start
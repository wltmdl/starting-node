const mongoose=require("mongoose");

//"mongoURL/DBNAME"
mongoose.connect(,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

mongoose.connection.on("error",(error)=>{console.log("mongo: ERROR- ",error)});
mongoose.connection.once("open",()=>{console.log("mongo: ON")});
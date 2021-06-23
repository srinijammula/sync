const exp=require("express")
const app=exp();
const path = require("path")

//importing
const userApi=require("./apis/user-api")
const mc=require("mongodb").MongoClient;

const databaseUrl="mongodb+srv://new1:test123@srini.dvcom.mongodb.net/db1?retryWrites=true&w=majority"

mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in database connection",err)
    }
    else{
        let databaseObj=client.db("db1");
        let userCollectionsObj=databaseObj.collection("db1collection")
        app.set("userCollectionsObj",userCollectionsObj)
        console.log("Database connection is success")
    }
})

app.use("/user",userApi)


//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/sync/')))



app.use((req,res)=>{
    res.send({message:`Path ${req.url} is invalid`})
})

app.use((err,req,res,next)=>{
    res.send({message:`${err.message}`})
})

const port=3000
app.listen(port,()=>console.log(`Server can hear you on ${port}....`))
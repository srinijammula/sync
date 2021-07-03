const exp=require("express")
const app=exp();
const path = require("path")
const mc=require("mongodb").MongoClient;

//importing
const userApi=require("./apis/user-api")
const adminApi = require('./apis/admin-api')
const productApi = require("./apis/product-api")

const databaseUrl="mongodb+srv://new1:test123@srini.dvcom.mongodb.net/db1?retryWrites=true&w=majority"

mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in database connection",err)
    }
    else{
        let databaseObj=client.db("db1");
        let userCollectionsObj=databaseObj.collection("db1collection")
        let adminCollection = databaseObj.collection("admincollection")
        let productCollectionObject = databaseObj.collection("productcollection")
        app.set("userCollectionsObj",userCollectionsObj)
        app.set("adminCollection", adminCollection)
        app.set("productCollectionObject", productCollectionObject)
        console.log("Database connection is success")
    }
})

app.use("/user",userApi)
app.use("/admin",adminApi)
app.use("/product",productApi)


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
//import all cloudinary modules
const cloudinary= require("cloudinary").v2;
const multer=require("multer")
const {CloudinaryStorage}=require("multer-storage-cloudinary")

//configure cloudinary
cloudinary.config({
    cloud_name:'srinijammula',
    api_key:'547687251359836',
    api_secret:'EVDC4bIuKg2FOb8uLB1ZraSVmOY'
})

//configure multer-storage-cloudinary
const clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async (req,file)=>{
        return{
            folder:"srini",
            public_id:file.fieldname+'-'+Date.now()
        }
    }
})

//configure multer
const multerObj= multer({storage:clStorage})

module.exports=multerObj;
const multer = require('multer')

//  using multer define storage
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,'./uploads') //the path where the file will be stored
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}}`
        callback(null,filename)
    }
})
// filtering uploading files
const filter = (req,file,callback)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null,true);
    }else{
        callback(null,false)
        return callback(new Error('Only .png , .jpeg , .jpg files are allowed'))
    }
}

// define upload
const upload = multer({
    storage,
    filter
})

// export upload
module.exports=upload;
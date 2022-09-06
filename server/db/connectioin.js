const mongoose = require("mongoose");

const DB = "mongodb+srv://milindsultane:hdfclife@cluster0.gskjlas.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(DB,
    /* {
    useUnifiedTopology:true,
    useNewUrlParser:true} */
).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error " + error.message));
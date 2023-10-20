const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { testModel } = require("./models/TestModel")
const cors = require("cors")
const { router } = require("./router")


const connectDb = () => {
    mongoose.connect("mongodb://mongo_container/testapp").then(val => {
        console.log("connection başarılı")
    }).catch(err => {
        console.log("bağlantı başarısız")
    })

}


app.use(cors())
app.use("/api",router)

app.get("/",(req,res)=>{
    res.send({
        msg : "selam tatlım"
    })
})




app.listen(5000, () => {
    connectDb()
    console.log("server is running")
})
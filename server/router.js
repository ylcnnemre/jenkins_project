const { testModel } = require("./models/TestModel")

const router = require("express").Router()

router.get("/", async (req, res) => {
    try {
        const data = await testModel.find()
        res.send(data)
    }
    catch (err) {
        console.log("normal ==>", err.message)
        res.status(500).send(err.message)
    }
})


router.get("/add", async (req, res) => {
    try {
        await testModel.create({
            name: "emre" + Math.random(0, 10).toString(),
            age: Math.random(0, 10)
        })
        res.send("eklendi")
    }
    catch (err) {
        console.log("add ===>", err.message)
        res.send(err.message)
    }
})

router.get("/delete", async (req, res) => {

    try {
        await testModel.deleteMany()
        res.send("başarılı")
    }
    catch (err) {
        console.log("delete===>", err.message)
        res.status(500).send("başarısız")
    }
})

function errthrow()
 {
    throw new Error("error varr")
 }

router.get("/zero", (req, res) => {

    process.exit(1)

})


module.exports = {
    router
}
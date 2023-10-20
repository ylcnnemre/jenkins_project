const mongoose = require("mongoose")


const Testschema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    age: {
        type: mongoose.SchemaTypes.Number,
        require: true
    }

}, {
    timestamps: true
})


const testModel = mongoose.model("test", Testschema)

module.exports = {
    testModel
}
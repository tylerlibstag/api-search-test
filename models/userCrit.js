const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userCritSchema = new Schema({

    bedrooms: {
        type: Number,
        required: "Please enter the number of bedrooms"
    },
    bathrooms: {
        type: Number,
        required: "Please enter the number of bathrooms"
    },
    address: {
        type: String,
        required: "Please enter the exact address"
    },
    zipcode: {
        type: Number,
        required: "Please enter the zip code"
    },
    sqrfeet: {
        type: Number,
    },
    view: {
        type: Boolean,
    },
    nearpark: {
        type: String,
    },
    nearsubway: {
        type: String,
    },
    neargrocery: {
        type: String,
    },
      
});



const userCrit = mongoose.model("Workout", userCritSchema);

module.exports = userCrit;
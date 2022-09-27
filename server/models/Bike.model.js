

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BikeSchema = new Schema({

    company: {type: String, required:true},
    insuranceType: {type: String, required:true},
    total: {type: String, required:true},
    bikeName: {type: String, required:true},
    engineCC: {type: String, required: true},
    manufacturingYear: {type: String, required:true},
    valueOfBike: {type: String, required:true}
}) 



module.exports = mongoose.model('Bike', BikeSchema)
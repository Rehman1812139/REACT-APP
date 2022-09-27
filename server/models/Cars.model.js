

const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

let CarSchema = new Schema({

    company: {type: String, required: true},
    insuranceType: {type: String, required: true},
    installmentAvailable: {type: String, required: true},
    totalAmount: {type: String, required: true},
    carBrand: {type: String, required: true},
    model: {type: String, required: true},
    Year: {type: String, required: true},
    carValue: {type: String, required: true}

})


module.exports = mongoose.model('Car', CarSchema);
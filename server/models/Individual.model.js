

const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

let IndividualSchema = new Schema({

    companyName: {type: String, required: true},
    hospitalization: {type: Number, required: true},
    roomAndBoardLimit: {type: Number, required: true},
    installmentAvailable: {type: String, required: true},
    premium: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true}

})


module.exports = mongoose.model('Individual', IndividualSchema);
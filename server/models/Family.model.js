

const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

let FamilySchema = new Schema({

    companyName: {type: String, required: true},
    roomAndBoardLimit: {type: String, required: true},
    installmentAvailable: {type: String, required: true},
    premium: {type: String, required: true},
    age: {type: Number, required: true},
    spouseAge: {type: Number, required: true},
    hospitalization: {type: Number, required: true}

})


module.exports = mongoose.model('Family', FamilySchema);
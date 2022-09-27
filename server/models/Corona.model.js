

const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

let CoronaSchema = new Schema({

    companyName: {type: String, required: true},
    lumpSumBenefits: {type: Number, required: true},
    deathExpenses: {type: String, required: true},
    hospitalCashAssistance: {type: String, required: true},
    premium: {type: String, required: true}

})


module.exports = mongoose.model('Corona', CoronaSchema);
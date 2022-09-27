

const Corona = require('../models/Corona.model');






exports.insert=async(req, res)=>{

    const companyName = req.body.companyName;
    const lumpSumBenefits = req.body.lumpSumBenefits;
    const deathExpenses = req.body.deathExpenses;
    const hospitalCashAssistance = req.body.hospitalCashAssistance;
    const premium = req.body.premium;


    const corona = new Corona({ companyName: companyName, lumpSumBenefits: lumpSumBenefits, deathExpenses: deathExpenses, hospitalCashAssistance: hospitalCashAssistance, premium: premium });  //Database:Variable
    try {
        await corona.save();
        console.log('Corona details have been inserted!!!!')
    } 
    catch (err) {
        console.log(err);
    }

}




exports.read = async(req, res)=>{

    Corona.find({companyName: req.body.companyName, lumpSumBenefits: req.body.lumpSumBenefits, deathExpenses: req.body.deathExpenses, hospitalCashAssistance: req.body.hospitalCashAssistance, premium: req.body.premium }, (err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result);
        }
    })
}




exports.update=async(req, res)=>{

    const id = req.body.id;

    const companyName = req.body.companyName;
    const lumpSumBenefits = req.body.lumpSumBenefits;
    const deathExpenses = req.body.deathExpenses;
    const hospitalCashAssistance = req.body.hospitalCashAssistance;
    const premium = req.body.premium;

    try {
        await Corona.findById(id, (err, update) => {
            
            update.companyName = companyName;
            update.lumpSumBenefits = lumpSumBenefits;
            update.deathExpenses = deathExpenses;
            update.hospitalCashAssistance = hospitalCashAssistance;
            update.premium = premium;

            update.save();
            
            console.log('Corona details have been updated!!!!')
        })
    } 
    catch (err) {
        console.log(err);
    }
}





exports.delete=async(req, res)=>{
    
    const id = req.params.id;

    await Corona.findByIdAndRemove(id).exec();
    // res.send('Deleted.');
    console.log('Corona details have been deleted!!!!')
}




const Individual = require('../models/Individual.model');



exports.insert=async(req, res)=>{

    const companyName = req.body.companyName;
    const hospitalization = req.body.hospitalization;
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const gender = req.body.gender;


    const individual = new Individual({ companyName: companyName, roomAndBoardLimit: roomAndBoardLimit, installmentAvailable: installmentAvailable, premium: premium, age: age, hospitalization: hospitalization, gender: gender});  //Database:Variable
    try {
        await individual.save();
        console.log('Individual details have been inserted!!!!')
    } 
    catch (err) {
        console.log(err);
    }

}




exports.read = async(req, res)=>{

    const companyName = req.body.companyName;
    const hospitalization = req.body.hospitalization;
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const gender = req.body.gender;

    Individual.find({companyName: companyName, roomAndBoardLimit: roomAndBoardLimit, installmentAvailable: installmentAvailable, premium: premium, age: age, hospitalization: hospitalization, gender: gender}, (err, result)=>{
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
    const hospitalization = req.body.hospitalization;
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const gender = req.body.gender;


    try {
        await Individual.findById(id, (err, update) => {
            
            update.companyName = companyName;
            update.roomAndBoardLimit = roomAndBoardLimit;
            update.installmentAvailable = installmentAvailable;
            update.premium = premium;
            update.age = age;
            update.gender = gender;
            update.hospitalization = hospitalization;

            update.save();
            
            console.log('Individual details have been updated!!!!')
        })
    } 
    catch (err) {
        console.log(err);
    }
}





exports.delete=async(req, res)=>{
    
    const id = req.params.id;

    await Individual.findByIdAndRemove(id).exec();
    // res.send('Deleted.');
    console.log('Individual details have been deleted!!!!')
}



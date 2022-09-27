

const Family = require('../models/Family.model');



exports.insert=async(req, res)=>{

    const companyName = req.body.companyName;
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const spouseAge = req.body.spouseAge;
    const hospitalization = req.body.hospitalization;


    const family = new Family({ companyName: companyName, roomAndBoardLimit: roomAndBoardLimit, installmentAvailable: installmentAvailable, premium: premium, age: age, spouseAge: spouseAge, hospitalization: hospitalization });  //Database:Variable
    try {
        await family.save();
        console.log('Family details have been inserted!!!!')
    } 
    catch (err) {
        console.log(err);
    }

}




exports.read = async(req, res)=>{

    const companyName = req.body.companyName;
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const spouseAge = req.body.spouseAge;
    const hospitalization = req.body.hospitalization;


    Family.find({companyName: companyName, roomAndBoardLimit: roomAndBoardLimit, installmentAvailable: installmentAvailable, premium: premium, age: age, spouseAge: spouseAge, hospitalization: hospitalization}, (err, result)=>{
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
    const roomAndBoardLimit = req.body.roomAndBoardLimit;
    const installmentAvailable = req.body.installmentAvailable;
    const premium = req.body.premium;
    const age = req.body.age;
    const spouseAge = req.body.spouseAge;
    const hospitalization = req.body.hospitalization;


    try {
        await Family.findById(id, (err, update) => {
            
            update.companyName = companyName;
            update.roomAndBoardLimit = roomAndBoardLimit;
            update.installmentAvailable = installmentAvailable;
            update.premium = premium;
            update.age = age;
            update.spouseAge = spouseAge;
            update.hospitalization = hospitalization;

            update.save();
            
            console.log('Family details have been updated!!!!')
        })
    } 
    catch (err) {
        console.log(err);
    }
}





exports.delete=async(req, res)=>{
    
    const id = req.params.id;

    await Family.findByIdAndRemove(id).exec();
    // res.send('Deleted.');
    console.log('Family details have been deleted!!!!')
}


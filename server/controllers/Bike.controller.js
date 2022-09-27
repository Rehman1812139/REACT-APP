

const Bike = require('../models/Bike.model');



exports.insert=async(req, res)=>{
    const company = req.body.company;
    const insuranceType = req.body.insuranceType;
    const total = req.body.total;
    const bikeName = req.body.bikeName;
    const engineCC = req.body.engineCC;
    const manufacturingYear = req.body.manufacturingYear;
    const valueOfBike = req.body.valueOfBike;


    const bike = new Bike({ company: company, insuranceType: insuranceType, total: total, bikeName: bikeName, engineCC: engineCC, manufacturingYear: manufacturingYear, valueOfBike: valueOfBike });  //Database:Variable
    try {
        await bike.save();
        console.log('Bike details have been inserted!!!!')
    } 
    catch (err) {
        console.log(err);
    }

}




exports.read = async(req, res)=>{
    Bike.find({bikeName: req.body.bikeName, engineCC: req.body.engineCC, manufacturingYear: req.body.manufacturingYear, valueOfBike: req.body.valueOfBike}, (err, result)=>{
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

    const company = req.body.company;
    const insuranceType = req.body.insuranceType;
    const total = req.body.total;
    const bikeName = req.body.bikeName;
    const engineCC = req.body.engineCC;
    const manufacturingYear = req.body.manufacturingYear;
    const valueOfBike = req.body.valueOfBike;

    try {
        await Bike.findById(id, (err, update) => {
            
            update.company = company;
            update.insuranceType = insuranceType;
            update.total = total;
            update.bikeName = bikeName;
            update.engineCC = engineCC;
            update.manufacturingYear = manufacturingYear;
            update.valueOfBike = valueOfBike;

            update.save();
            
            console.log('Bike details have been updated!!!!')
        })
    } 
    catch (err) {
        console.log(err);
    }
}





exports.delete=async(req, res)=>{
    const id = req.params.id;

    await Bike.findByIdAndRemove(id).exec();
    // res.send('Deleted.');
    console.log('Bike details have been deleted!!!!')
}


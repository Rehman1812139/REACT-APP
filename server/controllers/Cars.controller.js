

const Car = require('../models/Cars.model');





exports.insert=async(req, res)=>{
    const company = req.body.company;
    const insuranceType = req.body.insuranceType;
    const installmentAvailable = req.body.installmentAvailable;
    const totalAmount = req.body.totalAmount;
    const carBrand = req.body.carBrand;
    const model = req.body.model;
    const Year = req.body.Year;
    const carValue = req.body.carValue;


    const car = new Car({ company: company, insuranceType: insuranceType, installmentAvailable: installmentAvailable, totalAmount: totalAmount, carBrand: carBrand, model: model, Year: Year, carValue: carValue });  //Database:Variable
    try {
        await car.save();
        console.log('Car details have been inserted!!!!')
    } 
    catch (err) {
        console.log(err);
    }

}




exports.read = async(req, res)=>{

    Car.find({insuranceType: req.body.insuranceType, carBrand: req.body.carBrand, model: req.body.model, Year: req.body.Year, carValue: req.body.carValue}, (err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log(result)
            res.send(result);
            
        }
    })
}




exports.update=async(req, res)=>{

    const id = req.body.id;

    const company = req.body.company;
    const insuranceType = req.body.insuranceType;
    const installmentAvailable = req.body.installmentAvailable;
    const totalAmount = req.body.totalAmount;
    const carBrand = req.body.carBrand;
    const model = req.body.model;
    const Year = req.body.Year;
    const carValue = req.body.carValue;

    try {
        await Car.findById(id, (err, update) => {
            
            update.company = company;
            update.insuranceType = insuranceType;
            update.installmentAvailable = installmentAvailable;
            update.totalAmount = totalAmount;
            update.carBrand = carBrand;
            update.model = model;
            update.Year = Year;
            update.carValue = carValue;

            update.save();
            
            console.log('Car details have been updated!!!!')
        })
    } 
    catch (err) {
        console.log(err);
    }
}





exports.delete=async(req, res)=>{
    
    const id = req.params.id;

    await Car.findByIdAndRemove(id).exec();
    // res.send('Deleted.');
    console.log('Car details have been deleted!!!!')
}




const express = require('express');

const router = express.Router();


const car_controller = require('../controllers/Cars.controller')

const bike_controller = require('../controllers/Bike.controller')


const corona_controller = require('../controllers/Corona.controller')

const family_controller = require('../controllers/Family.controller')

const individual_controller = require('../controllers/Individual.controller')

const parents_controller = require('../controllers/Parents.controller')




// // Car routes
// router.get('/car/toyotaInsurance', car_controller.read);

// router.get('/car/hondaInsurance', car_controller.read);

router.post('/car/comprehensiveInsurance', car_controller.read);



// Bike routes
router.post('/Bike', bike_controller.read);



// Corona route
router.post('/coronaProtectionInsurance', corona_controller.read);


// Family route
router.post('/familyInsurance', family_controller.read);



// Individual route
router.post('/individualInsurance', individual_controller.read);



// // Parent route
// router.get('/parentInsurance', parents_controller.read);


// Contact Us route
// router.get('/contact');


module.exports = router;
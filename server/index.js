const express = require('express');
const mongoose = require('mongoose');
const session=require('express-session');
const cors = require('cors');



const app = express();



app.use(express.json());  // Including the json() function because it is needed to communicate with the json strings

app.use(cors());   // Using the cors function


app.use(session(
    {
    name:'sid',
    secret: 'random message', //this is needed for making a session key
    saveUninitialized: false, //for login sessions set it to false, setting to true means store blank sessions
    resave: false, 
    cookie: {
        expires: 600000 //or use maxAge ( takes in milliseconds value)
      }
    }
  )
  );

const routes = require('./routes/routes');
const login = require('./routes/Login.route')




mongoose.connect("mongodb+srv://NidaNadeem:blackswan@19@cluster0.dnzsj.mongodb.net/Securus?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})

.then(()=>{
    console.log("Connected to the database");
})

.catch((err)=>{
    console.log("Cannot connect to the database", err);
    process.exit();
})



app.use('/', routes);

app.use("/Login", login); 


app.listen(3001, ()=>{ console.log("Server is running at port 3001")})
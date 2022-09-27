const User=require('../models/Login.model');


exports.loginchk=(req,res)=>{

    const {username,password}=req.body;

    console.log(username)
    console.log(password)

    try{
        User.findOne({username:username, password:password},(err, user)=>{

            console.log(user)

            if(user===null){
                res.end('User does not exist')
            }
            else {
                console.log("done")
                res.send("found")
                // req.session.username=username;
            }
        })

    }catch(err){
        res.send(err)
    }
}




exports.logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }
        else{
            console.log('Destroying session');
            res.send("logout")
        }
        // res.redirect('/users/login')
    });
}

// exports.redirectLogin=(req,res,next)=>{
//     if(!req.session.username){
//         res.redirect('/users/login')
//     }else{
//         next()
//     }
// }

// exports.dashboard=(req,res)=>{
//     res.render('dashboard',{page:'Dashboard', menuID:'dashboard', session:req.session})
// }
// logic for user registration
const users = require("../modal/userSchema");
const jwt = require('jsonwebtoken')
exports.register = async(req,res)=>{
    console.log(req.body);
    const {username,email,password} = req.body
  try{ const existingUser =  await users.findOne({email:email})
   if(existingUser){
    res.status(400).json('user alredy exist')
   }
   else{
    const newUser = new users({
        username,
        email:email,
        password
    })
    await newUser.save()
    res.status(200).json(newUser)
   }
}catch(err){
    res.status(401).json('registration process failed',err)
}
}
// logic to login
exports.login = async (req,res)=>{
    console.log('inside login function');
    const {email,password} = req.body
   try{ const existingUser = await users.findOne({email:email,password})
    if(existingUser){
        //token generate - sign('data','sectretkey')
        const token=jwt.sign({userId:existingUser._id},"supersecretkey123")
        res.status(200).json({existingUser,token})
    }
    else{
        res.status(406).json('incorrect email or password')
    }
}
catch(err){
    res.status(401).json('login request failed due to',err)
}}
//import { error } from "console";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup =async (req, res, next) => {
const  { emial, email, password } = req.body;

if(!emial || !email || !password || emial=== '' || email === ''  || password === '' ){

next(errorHandler(400,'ALL FIELDS ARE REQUIRED'));

}
const hashPassword =  bcryptjs.hashSync(password,10);

const newUser = new User({

emial,
email,
password: hashPassword,

});
try{
    await newUser.save();
res.json({message:'signup successful'});
} catch(error){
next(error) ;  
};

};
export const signin= async (req, res, next)=>{
    const{emial, password}= req.body;
   if( !emial || !password || emial===''|| password ===''){
    next(errorHandler(400,'all fields are required'));
   }
   try{
       const validUser = await User.findOne({emial});
       if(!validUser){
        next(errorHandler(404, 'user not found'));
       }
const validPassword = bcryptjs.compareSync(password, validUser.password);
if(!validPassword){
    next(errorHandler(400, 'Invalid password'));

}
  const token= jwt.sign({
        id: validUser._id},process.env.JWT_SECRET);
       res.status(200).cookie('access_token',token,{
        httpOnly: true})
        .json(validUser);
   } catch(error){
    next(error);
   }
};
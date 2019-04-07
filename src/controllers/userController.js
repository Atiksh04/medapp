import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {userSchema} from "../models/userModel.js";


const User = mongoose.model("USER",userSchema);

export const register =(req,res)=>{
	const newUser= new User(req.body);
	
	newUser.hashPassword=bcrypt.hashSync(req.body.hashpassword,10);
	newUser.save((err,done)=>{
		if (err) res.send(err);
		else{
			newUser.hashPassword=undefined;
			res.json(done);
		}
	});
};

export const login= (req,res)=>{
	User.findOne({username:req.body.username},(err,user)=>{
		if(err) res.send(err);
		if(!user) res.json({message:"User not found"});
		else if(user){
			console.log(req.body.hashpassword);
			console.log(user.hashPassword);
			if(!user.comparePassword(req.body.hashpassword,user.hashPassword))
				 res.json({message:"Authentication failed wrong password"});
			else {
				res.render('dashbord.ejs');
			res.json({token:jwt.sign({email:user.email,username:user.username,_id:user.id},'RESTFULAPIs')});
			console.log("Page render");
			
			}
		}		
	});
}
//controller below will check each time is the user reistered or not.
export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!'});
    }
}
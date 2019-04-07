import mongoose from "mongoose";
import {userSchema} from "../models/model";

const Contact = mongoose.model('contactDetails',userSchema);
export const addnewContact=(req,res)=>{
	let newContact = new Contact(req.body);
	newContact.save((err,contact)=>{
		if(err) res.send(err);

		res.json(contact);
	});
};
export const findDetails=(req,res)=>{
	res.render('../view/login');
	Contact.find({},(err,details)=>{
		if(err){
			res.send(err);
		}

		
	})
};



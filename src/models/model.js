import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema=new Schema({
	name:String,
	username:String,
	email:String,
	status:String,
	creation_date:{type:String,
		default:Date.now}
		
});


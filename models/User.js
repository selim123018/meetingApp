const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
	googleId:{
		type:String
	},
    facebookId:{
		type:String
	},
	username:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	userType:{
		type:String
	},
	date:{
		type:Date,
		default:Date.now
	}
},{
	collection:"users"
})

module.exports=User=mongoose.model('users',userSchema);

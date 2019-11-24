const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const passport=require('passport');
const keys=require('../config/keys');
const validateRegisterInput=require('../validation/register');
const validateLoginInput=require('../validation/login');
const User=require('../models/User');
const router=express.Router();

router.post('/register',(req,res)=>{
    console.log(req.body)
	const {errors, isValid}=validateRegisterInput(req.body);

    if(!isValid){
    	return res.status(400).json(errors);
    }

	User.findOne({ email:req.body.email })
	.then((user)=>{
		if(user){
			errors.email='Email already exits';
			res.status(400).json(errors);
		}else{
			const newUser= new User({
				username    :req.body.username,
				email   :req.body.email,
				password:req.body.password,
				role:req.body.role
			})

			bcrypt.genSalt(10, (err,salt)=>{
				bcrypt.hash(newUser.password,salt,(err,hash)=>{
					if(err) throw err;
					newUser.password=hash;
					newUser.save()
					.then((user)=>{
						res.json(user);
					})
					.catch((err)=>{
						console.log(err);
					})
				})

			})
		}
	})
})

router.post('/login',(req,res)=>{

	const {errors, isValid}=validateLoginInput(req.body);

    if(!isValid){
    	return res.status(400).json(errors);
    }

	const email=req.body.email;
	const password=req.body.password;
	User.findOne({email})
	.then(user=>{
		if(!user){
			errors.email='User not found';
			res.status(404).json(errors);
		}

		bcrypt.compare(password, user.password)
		.then(isMatch=>{
			if(isMatch){
				const payload={id:user.id, role:user.role, name:user.username};
				jwt.sign(
					payload,
					keys.secretOrKey,
					{ expiresIn:3600 },
					(err,token)=>{
						res.json({
							success:true,
							token:'bearer ' +token
						})
					});
			}else{
				errors.password='Incorrect password';
				res.status(400).json(errors);
			}
		})
	});
});

router.get('/all', (req, res)=>{
	User.find()
	.then(data=>{ res.json(data) })
	.catch(err=> console.log(err));
})
router.get('/current',passport.authenticate('jwt',{session:false}), (req,res)=>{
	res.json({
		id:req.user.id,
		name:req.user.name,
		email:req.user.email
	});
});

router.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
})
);

router.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
	res.redirect('/profile');
});

router.get('/api/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
	res.send(req.user);
});

router.get('/auth/facebook', passport.authenticate('facebook', {
	profileFields: ['id', 'name'],
})
);

router.get('/auth/facebook/callback', passport.authenticate('facebook'),(req,res)=>{
	res.redirect('/profile');
});


module.exports=router;

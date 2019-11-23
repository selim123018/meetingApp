const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport');
const path=require('path');
const cors = require('cors')
const users=require('./routes/users');
const meeting=require('./routes/meeting');


require('./services/passport');
const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
//app.use('./uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(passport.initialize());


//DB config
const db=require('./config/keys').mongoURI;

//MongoDB connect
mongoose
.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('MongoDB connected'))
.catch((err)=> console.log(err));


//use routes
app.use('/api/users',users);
app.use('/api/meeting',meeting);



app.listen(port,()=>{
	console.log('server is running on port: '+port);
})

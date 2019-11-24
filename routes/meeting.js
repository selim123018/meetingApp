const express=require('express');
const Meeting=require('../models/Meeting');

const router=express.Router();

router.post('/newMeeting', (req, res)=>{
  console.log(req.body.date)
  const newMeeting= new Meeting({
      title:req.body.title,
      user:req.body.user,
      startTime:req.body.startTime,
      endTime:req.body.endTime,
      date:req.body.date
  })
  newMeeting.save()
  .then(meeting=> console.log(meeting))
  .catch(err=> res.json(err));
})

router.get('/allMeeting', (req, res)=>{
    Meeting.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
})

router.get('/edit/:id',function(req, res) {
  let id = req.params.id;
  Meeting.findById(id)
  .then(data=> res.json(data))
  .catch(err=> res.json(err));
});

router.post('/update/:id',function(req, res) {
  Meeting.findById(req.params.id)
  .then(data=>{
      data.title=req.body.title;
      data.user=req.body.user;
      data.startTime=req.body.startTime;
      data.endTime=req.body.endTime;
      data.date=req.body.date;

    data.save()
      .then((user)=>{
        res.json(user);
      })
      .catch((err)=>{
        console.log(err);
      })
  })
});

router.get('/delete/:id', (req, res)=>{
    Meeting.findByIdAndRemove({_id:req.params.id})
    .then(data=> console.log('data delete succesfully'))
    .catch(err=> console.log(err));
})


module.exports=router;
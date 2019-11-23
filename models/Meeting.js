const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const meetingSchema = new Schema({
  title:{
    type:String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
});

module.exports =Meeting=mongoose.model('meeting', meetingSchema);

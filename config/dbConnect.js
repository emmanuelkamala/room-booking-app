// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const dbConnect = () => {
  if(mongoose.connection.readyState >= 1){
    return
  }

  mongoose.connect('mongodb://localhost:27017/room-booking-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

// export default dbConnect;

module.exports = dbConnect;
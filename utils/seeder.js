const Room = require('../models/room');
const dbConnect = require('../config/dbConnect');
const rooms = require('../data/rooms');

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('Rooms are deleted');

    await Room.insertMany(rooms);
    console.log('All Rooms are added');
  } catch (error) {
    console.log(error.message);
    process.exit()
  }
}

seedRooms()
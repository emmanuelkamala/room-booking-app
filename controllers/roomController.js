import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
  
}

// Create new Room => /api/rooms
const newRoom = async (req, res) => {
  try {
      const room = await Room.create(req.body);
      res.status(200).json({
      success: true,
      room
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
  
}

// Get Room details => /api/rooms/:id
const getSingleRoom = async (req, res, next) => {
  try {
      const room = await Room.findById(req.query.id);
      if(!room){
        //   res.status(404).json({
        //   success: false,
        //   error: 'Room not found with this ID'
        // })
        return next(new ErrorHandler('Room not found with this ID', 404))
      }
      res.status(200).json({
      success: true,
      room
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
  
}

// Update Room details => /api/rooms/:id
const updateRoom = async (req, res) => {
  try {
      let room = await Room.findById(req.query.id);
      if(!room){
          res.status(404).json({
          success: false,
          error: 'Room not found with this ID'
        })
      }

      room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
      })

      res.status(200).json({
      success: true,
      room
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
  
}


// Delete a Room details => /api/rooms/:id
const deleteRoom = async (req, res) => {
  try {
      const room = await Room.findById(req.query.id);
      if(!room){
          res.status(404).json({
          success: false,
          error: 'Room not found with this ID'
        })
      }

      await room.remove();

      res.status(200).json({
      success: true,
      message: 'Room is deleted'
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
  
}

export {
  allRooms,
  newRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom
}
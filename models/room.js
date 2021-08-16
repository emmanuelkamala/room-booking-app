import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Please enter room name'],
    trim: true,
    maxLength: [100, 'Room name cannot exceed 100 characters']
  },
  pricePerNight: {
    type: Number, 
    required: [true, 'Please enter room price per night'],
    maxLength: [6, 'Room price cannot exceed 6 characters'],
    default: 0
  },
  description: {
    type: String, 
    required: [true, 'Please enter room description'],
  },
  address: {
    type: String, 
    required: [true, 'Please enter room address'],
  },
  guestCapacity: {
    type: Number, 
    required: [true, 'Please enter room guest capacity'],
  },
  numOfBeds: {
    type: Number, 
    required: [true, 'Please enter number of beds in room'],
  },
  internet: {
    type: Boolean, 
    default: false,
  },
  breakfast: {
    type: Boolean, 
    default: false,
  },
  airConditioned: {
    type: Boolean, 
    default: false,
  },
  petsAllowed: {
    type: Boolean, 
    default: false,
  },
  roomCleaning: {
    type: Boolean, 
    default: false,
  },
  ratings: {
    type: Number, 
    default: 0,
  },
  numOfReviews: {
    type: Number, 
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String, 
        required: true
      }, 
      url: {
        type: String,
        reauired: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, 'Please enter room category'],
    enum: {
      values: [
        'King',
        'Single',
        'Twins'
      ],
      message: 'Please select correct category for room'
    }
  }, 
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
      },
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String, 
        required: true
      }
    }
  ], 
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model.Room || mongoose.model('Room', roomSchema);
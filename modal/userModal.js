import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    title: {
      type: String,
      enum: ['Mr', 'Mrs'],
    },
    first: { type: String },
    last: { type: String },
  },
  dob: { date: String, age: Number },

  gender: { type: String, enum: ['male', 'female'] },
  email: {
    type: String,
    required: [true, 'Email must not be empty'],
    trim: true,
    lowercase: true,
  },
  photo: { type: String },
});

const Userinfo = new mongoose.model('Userinfo', userSchema);

export default Userinfo;

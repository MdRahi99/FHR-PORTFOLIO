import mongoose from 'mongoose';

const { Schema } = mongoose;

const aboutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.models.About || mongoose.model('About', aboutSchema);

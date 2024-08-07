import mongoose from 'mongoose';

const { Schema } = mongoose;

const experienceSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  companyUrl: {
    type: String,
  },
});

export default mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

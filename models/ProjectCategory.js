import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.ProjectCategory || mongoose.model('ProjectCategory', categorySchema);

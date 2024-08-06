import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Skills || mongoose.model('Skills', skillsSchema);

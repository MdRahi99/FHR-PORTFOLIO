import mongoose from 'mongoose';

const { Schema } = mongoose;

const technologySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const projectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'ProjectCategory',
    required: true,
  },
  technologies: {
    type: [technologySchema],
    required: true,
  },
  sourceCode: {
    type: String,
  },
  url: {
    type: String,
  },
});

export default mongoose.models.Projects || mongoose.model('Projects', projectsSchema);

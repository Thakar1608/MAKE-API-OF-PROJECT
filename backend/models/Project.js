const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  status: {
    type: String,
    enum: ['Planning', 'In Progress', 'Completed'],
    default: 'Planning'
  },
  techStack: {
    type: String,
    trim: true
  },
  deadline: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);

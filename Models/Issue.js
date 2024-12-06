import mongoose from 'mongoose';

const Issue = mongoose.Schema(
  {
    name: String,
    age: Number,
    issueName: String,
    issueStatus: String,
    startDate: String,
    endDate: String,
    issueType: String,
    assignedTo: String,
    summary: String,
    description: String,
    acceptanceCriteria: String,
    refTo: String,
    iteration: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Issue || mongoose.model('Issue', Issue);

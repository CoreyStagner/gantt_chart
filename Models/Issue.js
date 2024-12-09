import mongoose from 'mongoose';

const IssueSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Issue', IssueSchema);

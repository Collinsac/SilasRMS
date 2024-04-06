import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  purpose: String,
  timeframe:String,
  completedTasks: String,
  challenges:String,
  plannedTasks:String,
  milestones:String,
  additionalComments:String,
  employeeId: String,
}, {
  timestamps: true
})

const reportModel = mongoose.model('report', reportSchema)

export default reportModel
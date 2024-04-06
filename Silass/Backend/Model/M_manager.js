import mongoose from "mongoose";

const managerSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  password: String,
  departmentId: String
}, {
  timestamps: true
})

const managerModel = mongoose.model('manager', managerSchema)

export default managerModel
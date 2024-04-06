import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  password: String,
  departmentId: String
}, {
  timestamps: true
})

const employeeModel = mongoose.model('employee', employeeSchema)

export default employeeModel
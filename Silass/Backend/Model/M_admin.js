import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  password: String
}, {
  timestamps: true
})

const adminModel = mongoose.model('admin', adminSchema)

export default adminModel
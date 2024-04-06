import mongoose from "mongoose";

const departSchema = mongoose.Schema({
  name: String,
  managerId: String
}, {
  timestamps: true
})

const departModel = mongoose.model('depart', departSchema)

export default departModel
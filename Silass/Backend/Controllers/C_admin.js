import { json } from "express";
import adminModel from "../Model/M_admin.js";
//GET ALL
const getAllAdmin = async (req, res) => {
  try {
    const admin = await adminModel.find()
    res.status(200).json(admin)
  } catch (error) {
    res.status(500).json(error)
  }
}

// ADD 
const addAdmin = async (req, res) => {
  const data = req.body
  try {
    const admin = await new adminModel(data)
    await admin.save();
    res.status(201).json(admin)
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET ONE

const getOneAdmin = async (req, res) => {
  const { id } = req.params
  try {
    const admin = await adminModel.findById(id)
    admin ? res.status(200).json(admin) : res.status(404).json({ msg: "not found" })

  } catch (error) {
    res.status(500).json(error)
  }
}


const updateAdmin = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {

    const admin = await adminModel.findByIdAndUpdate(id, data, { new: true })
    admin ? res.status(200).json(admin) : res.status(404).json({ msg: "No such admin" })

  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAdmin = async (req, res) => {
  const { id } = req.params
  try {
    const admin = await adminModel.findByIdAndDelete(id)
    admin ? res.status(200).json({ msg: 'Succesfully deleted!' }) : res.status(404).json({ msg: 'not found!' })
  } catch (error) {
    res.status(500).json(error)
  }
}


export { getAllAdmin, addAdmin, getOneAdmin, updateAdmin, deleteAdmin }

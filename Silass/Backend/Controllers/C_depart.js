import { json } from "express";
import departModel from "../Model/M_depart.js";
//GET ALL
const getAllDepart = async (req, res) => {
  try {
    const depart = await departModel.find()
    res.status(200).json(admin)
  } catch (error) {
    res.status(500).json(error)
  }
}

// ADD 
const addDepart = async (req, res) => {
  const data = req.body
  try {
    const depart = await new adminModel(data)
    await depart.save();
    res.status(201).json(depart)
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET ONE

const getOneDepart = async (req, res) => {
  const { id } = req.params
  try {
    const depart = await departModel.findById(id)
    depart ? res.status(200).json(depart) : res.status(404).json({ msg: "not found" })

  } catch (error) {
    res.status(500).json(error)
  }
}


const updateDepart = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {

    const depart = await departModel.findByIdAndUpdate(id, data, { new: true })
    depart ? res.status(200).json(depart) : res.status(404).json({ msg: "No such department" })

  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteDepart = async (req, res) => {
  const { id } = req.params
  try {
    const depart = await departModel.findByIdAndDelete(id)
    depart ? res.status(200).json({ msg: 'Succesfully deleted!' }) : res.status(404).json({ msg: 'not found!' })
  } catch (error) {
    res.status(500).json(error)
  }
}


export { getAllDepart, addDepart, getOneDepart, updateDepart, deleteDepart }

import { json } from "express";
import managerModel from "../Model/M_manager.js";
//GET ALL
const getAllManager = async (req, res) => {
  try {
    const manager = await managerModel.find()
    res.status(200).json(manager)
  } catch (error) {
    res.status(500).json(error)
  }
}

// ADD 
const addManager = async (req, res) => {
  const data = req.body
  try {
    const manager = await new managerModel(data)
    await manager.save();
    res.status(201).json(manager)
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET ONE

const getOneManager = async (req, res) => {
  const { id } = req.params
  try {
    const manager = await managerModel.findById(id)
    manager ? res.status(200).json(manager) : res.status(404).json({ msg: "not found" })

  } catch (error) {
    res.status(500).json(error)
  }
}


const updateManager = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {

    const manager = await managerModel.findByIdAndUpdate(id, data, { new: true })
    manager ? res.status(200).json(manager) : res.status(404).json({ msg: "No such manager" })

  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteManager = async (req, res) => {
  const { id } = req.params
  try {
    const manager = await managerModel.findByIdAndDelete(id)
    manager ? res.status(200).json({ msg: 'Succesfully deleted!' }) : res.status(404).json({ msg: 'not found!' })
  } catch (error) {
    res.status(500).json(error)
  }
}


export { getAllManager, addManager, getOneManager, updateManager, deleteManager }

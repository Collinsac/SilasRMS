import { json } from "express";
import employeeModel from "../Model/M_employee.js";
//GET ALL
const getAllEmployee = async (req, res) => {
  try {
    const employee = await employeeModel.find()
    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json(error)
  }
}

// ADD 
const addEmployee = async (req, res) => {
  const data = req.body
  try {
    const employee = await new employeeModel(data)
    await employee.save();
    res.status(201).json(employee)
  } catch (error) {
    res.status(500).json(error)
  }
}

//GET ONE

const getOneEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await employeeModel.findById(id)
    employee ? res.status(200).json(employee) : res.status(404).json({ msg: "not found" })

  } catch (error) {
    res.status(500).json(error)
  }
}


const updateEmployee = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {

    const employee = await employeeModel.findByIdAndUpdate(id, data, { new: true })
    employee ? res.status(200).json(employee) : res.status(404).json({ msg: "No such employee" })

  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await employeeModel.findByIdAndDelete(id)
    employee ? res.status(200).json({ msg: 'Succesfully deleted!' }) : res.status(404).json({ msg: 'not found!' })
  } catch (error) {
    res.status(500).json(error)
  }
}


export { getAllEmployee, addEmployee, getOneEmployee, updateEmployee, deleteEmployee }

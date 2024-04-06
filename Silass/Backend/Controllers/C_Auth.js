import employeeModel from "../Model/M_employee.js";
import managerModel from "../Model/M_manager.js";
import adminModel from "../Model/M_admin.js"

//employee
const authEmployee = async (req, res) => {
  
  const { email, password } = req.body
  try {
    
    const employee = await employeeModel.findOne({email})
    employee ? employee.password == password ? res.status(200).json({ msg: 'Successfully Login!',id:employee._id }) : res.status(400).json({ msg: 'Email/Password incorrect!' }) : res.status(404).json({ msg: 'Email/Password incorrect!' })
  } catch (error) {
    res.status(500).json(error)
  }
}

//manager
const authManager = async (req, res) => {
  
  const { email, password } = req.body
  try {
    
    const manager = await managerModel.findOne({email})
    manager ? manager.password == password ? res.status(200).json({ msg: 'Successfully Login!' }) : res.status(400).json({ msg: 'Email/Password incorrect!' }) : res.status(404).json({ msg: 'Email/Password incorrect!' })
  } catch (error) {
    res.status(500).json(error)
  }
}

//admin
const authAdmin = async (req, res) => {
  
  const { email, password } = req.body
  try {
    
    const admin = await adminModel.findOne({email})
    admin ? admin.password == password ? res.status(200).json({ msg: 'Successfully Login!' }) : res.status(400).json({ msg: 'Email/Password incorrect!' }) : res.status(404).json({ msg: 'Email/Password incorrect!' })
  } catch (error) {
    res.status(500).json(error)
  }
}

export {authEmployee, authManager, authAdmin}
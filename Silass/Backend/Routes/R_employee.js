import express from "express"
import { addEmployee, deleteEmployee, getAllEmployee, getOneEmployee, updateEmployee } from "../Controllers/C_employee.js"

const Route = express.Router()

// GET ALL EMPLOYEE
Route.get('/', getAllEmployee)
//POST AN EMPLOYEE
Route.post('/', addEmployee)
// GET ONE 
Route.post('/:id', getOneEmployee)

Route.patch('/:id', updateEmployee)

Route.delete('/:id', deleteEmployee)



export default Route
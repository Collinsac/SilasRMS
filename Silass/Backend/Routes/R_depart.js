import express from "express"
import { addDepart, deleteDepart, getAllDepart, getOneDepart, updateDepart } from "../Controllers/C_depart.js"

const Route = express.Router()

// GET ALL Department
Route.get('/', getAllDepart)
//POST A department
Route.post('/', addDepart)
// GET ONE 
Route.post('/:id', getOneDepart)

Route.patch('/:id', updateDepart)

Route.delete('/:id', deleteDepart)



export default Route
import express from "express"
import { addManager, deleteManager, getAllManager, getOneManager, updateManager } from "../Controllers/C_manager.js"

const Route = express.Router()

// GET ALL Manager
Route.get('/', getAllManager)
//POST A manager
Route.post('/', addManager)
// GET ONE 
Route.post('/:id', getOneManager)

Route.patch('/:id', updateManager)

Route.delete('/:id', deleteManager)



export default Route
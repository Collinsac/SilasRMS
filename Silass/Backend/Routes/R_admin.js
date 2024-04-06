import express from "express"
import { addAdmin, deleteAdmin, getAllAdmin, getOneAdmin, updateAdmin } from "../Controllers/C_admin.js"

const Route = express.Router()

// GET ALL Admin
Route.get('/', getAllAdmin)
//POST AN Admin
Route.post('/', addAdmin)
// GET ONE 
Route.post('/:id', getOneAdmin )

Route.patch('/:id', updateAdmin)

Route.delete('/:id', deleteAdmin)



export default Route
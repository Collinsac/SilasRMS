import express from "express"
import { addReport, deleteReport, getAllReport, getOneReport, getReportsByEmployeeId, updateReport } from "../Controllers/C_report.js"

const Route = express.Router()

// GET ALL Manager
Route.get('/', getAllReport)
//POST A manager
Route.post('/', addReport)

Route.post('/emp/:id', getReportsByEmployeeId)
// GET ONE 
Route.post('/:id', getOneReport)

Route.patch('/:id', updateReport)

Route.delete('/:id', deleteReport)



export default Route
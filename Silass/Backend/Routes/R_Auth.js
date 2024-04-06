import express from "express"
import { authEmployee, authManager, authAdmin } from "../Controllers/C_Auth.js"

const Route = express.Router()

Route.post('/employee', authEmployee)
Route.post('/manager', authManager)
Route.post('/admin', authAdmin)

export default Route
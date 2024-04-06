import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// THE ROUTES 

import R_employee from './Routes/R_employee.js'
import R_Auth from './Routes/R_Auth.js'
import R_manager from './Routes/R_manager.js'
import R_admin from './Routes/R_admin.js'
import R_depart from "./Routes/R_depart.js"
import R_report from "./Routes/R_report.js"

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(process.env.DB_URL).then(() => app.listen(process.env.PORT, () => console.log(`app started on port http://localhost:${process.env.PORT}`))).catch((err) => console.log(err))

app.use("/employee", R_employee)
app.use("/Auth", R_Auth )
app.use("/manager", R_manager)
app.use("/admin", R_admin)
app.use("/depart", R_depart)
app.use("/report", R_report)

app.get("/", (req, res) => {
  res.send("API started")
})
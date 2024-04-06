import { json } from "express";
import reportModel from "../Model/M_report.js";
//GET ALL
const getAllReport = async (req, res) => {
  try {
    const report = await reportModel.find();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ADD
const addReport = async (req, res) => {
  const data = req.body;
  try {
    const report = await new reportModel(data);
    await report.save();
    res.status(201).json({report,msg:"Added"});
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ONE

const getOneReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await reportModel.findById(id);
    report
      ? res.status(200).json(report)
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateReport = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const report = await reportModel.findByIdAndUpdate(id, data, { new: true });
    report
      ? res.status(200).json(report)
      : res.status(404).json({ msg: "No such report" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await reportModel.findByIdAndDelete(id);
    report
      ? res.status(200).json({ msg: "Succesfully deleted!" })
      : res.status(404).json({ msg: "not found!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getReportsByEmployeeId = async (req, res) => {
  const { id } = req.params;
  try {
    const reports = await reportModel.find({ employeeId:id });
    reports
      ? res.status(200).json(reports)
      : res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  getAllReport,
  addReport,
  getOneReport,
  updateReport,
  deleteReport,
  getReportsByEmployeeId,
};

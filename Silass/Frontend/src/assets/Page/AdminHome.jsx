import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const AdminHome = () => {
  const [Employee, setEmployee] = useState();
  const [Report, setReport] = useState();
  const [Manager, setManager] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/employee")
      .then((res) => setEmployee(res.data.length));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/manager")
      .then((res) => setManager(res.data.length));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/report")
      .then((res) => setReport(res.data.length));
  }, []);


  return (
    <div className="flex gap-1">
      <Card title="Number of Emloyees" number={Employee} />
      <Card  title="Number of Reports" number={Report}/>
      <Card title="Number of Mananger" number={Manager}/>
    </div>
  );
};

export default AdminHome;

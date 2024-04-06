import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const EmployeeHome = () => {
  const [Report, setReport] = useState();

 
  useEffect(() => {
    axios
      .post(`http://localhost:5000/report/emp/${localStorage.getItem("eId")}`)
      .then((res) => setReport(res.data.length));
  }, []);

  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Employee Dashboard!
      </h2>
      <div className="flex gap-2">
        <Card title="number of reports" number={Report} />
        {/* <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default EmployeeHome;

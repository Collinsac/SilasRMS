import axios from "axios";
import React, { useEffect, useState } from "react";
const Card = (props) => {
  return (
    <div className="mx-auto shadow-md w-[80%] bg-white my-5 p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Report</h2>

      <h3 className="text-lg font-bold mt-6">Introduction</h3>
      <p>{props.purpose}</p>

      <h3 className="text-lg font-bold mt-6">Timeframe</h3>
      <p>{props.timeframe}</p>

      <h3 className="text-lg font-bold mt-6">Work Accomplished</h3>
      <p>{props.completedTasks}</p>

      <h3 className="text-lg font-bold mt-6">Challenges</h3>
      <p>{props.challenges}</p>

      <h3 className="text-lg font-bold mt-6">Goals for Next Period</h3>
      <p>{props.plannedTasks}</p>

      <h3 className="text-lg font-bold mt-6">Milestones</h3>
      <p>{props.milestones}</p>

      <h3 className="text-lg font-bold mt-6">Additional Comments</h3>
      <p>{props.additionalComments}</p>
    </div>
  );
};
const ViewAllReport = () => {
  const [Report, setReport] = useState([]);
  useEffect(() => {
    axios
      .post(`http://localhost:5000/report/emp/${localStorage.getItem("eId")}`)
      .then((res) => setReport(res.data));
  }, []);
  return (
    <div>
      {Report.map((item, index) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

export default ViewAllReport;

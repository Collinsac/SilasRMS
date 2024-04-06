import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EmployeeForm = () => {
  const [purpose, setPurpose] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [completedTasks, setCompletedTasks] = useState("");
  const [challenges, setChallenges] = useState("");
  const [plannedTasks, setPlannedTasks] = useState("");
  const [milestones, setMilestones] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeId = localStorage.getItem("eId");
    axios
      .post("http://localhost:5000/report/", {
        purpose,
        timeframe,
        completedTasks,
        challenges,
        plannedTasks,
        milestones,
        additionalComments,
        employeeId,
      })
      .then((res) => toast.success(res.data.msg))
      .catch((err) => err);
  };

  return (
    <form className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Progress Report</h2>

      <h3 className="text-lg font-bold mt-6">Introduction</h3>
      <div className="mb-4">
        <label htmlFor="purpose" className="block font-medium mb-1">
          What is the purpose of this progress report?
        </label>
        <textarea
          id="purpose"
          name="purpose"
          rows="4"
          cols="50"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="timeframe" className="block font-medium mb-1">
          What timeframe does this report cover?
        </label>
        <input
          type="text"
          id="timeframe"
          name="timeframe"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <h3 className="text-lg font-bold mt-6">Work Accomplished</h3>
      <div className="mb-4">
        <label htmlFor="completedTasks" className="block font-medium mb-1">
          What tasks or projects have been completed since the last report?
        </label>
        <textarea
          id="completedTasks"
          name="completedTasks"
          rows="4"
          cols="50"
          value={completedTasks}
          onChange={(e) => setCompletedTasks(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="challenges" className="block font-medium mb-1">
          What challenges were encountered and how were they addressed?
        </label>
        <textarea
          id="challenges"
          name="challenges"
          rows="4"
          cols="50"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <h3 className="text-lg font-bold mt-6">Goals for Next Period</h3>
      <div className="mb-4">
        <label htmlFor="plannedTasks" className="block font-medium mb-1">
          What tasks or projects are planned for the next reporting period?
        </label>
        <textarea
          id="plannedTasks"
          name="plannedTasks"
          rows="4"
          cols="50"
          value={plannedTasks}
          onChange={(e) => setPlannedTasks(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="milestones" className="block font-medium mb-1">
          Are there any milestones or deadlines to be aware of?
        </label>
        <textarea
          id="milestones"
          name="milestones"
          rows="4"
          cols="50"
          value={milestones}
          onChange={(e) => setMilestones(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <h3 className="text-lg font-bold mt-6">Additional Comments</h3>
      <div className="mb-4">
        <label htmlFor="additionalComments" className="block font-medium mb-1">
          Is there any other information or feedback to share?
        </label>
        <textarea
          id="additionalComments"
          name="additionalComments"
          rows="4"
          cols="50"
          value={additionalComments}
          onChange={(e) => setAdditionalComments(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;

import React from "react";
import { Link, Outlet } from "react-router-dom";


const EmployeeDashboard = () => {
  

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-64 bg-white px-8 py-4">
        <h1 className="text-lg font-bold mb-4">Employee Dashboard</h1>
        <ul className="space-y-2">
          <li>
            <Link to={'/Employee'} className="block py-2 px-4 rounded hover:bg-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={'/Employee/Form'} className="block py-2 px-4 rounded hover:bg-gray-300">
              Add Report
            </Link>
          </li>
          <li>
            <Link to="/Employee/All" className="block py-2 px-4 rounded hover:bg-gray-300">
              All Report
            </Link>
          </li>
          {/* <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">
              Payroll
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-300">
              Settings
            </a>
          </li> */}
        </ul>
      </div>
      <div className="overflow-scroll flex-1">
        <Outlet/>
      </div>
     
    </div>
  );
};

export default EmployeeDashboard;

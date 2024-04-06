import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-64 bg-white px-8 py-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <ul className="space-y-2">
          <li>
            <Link
              href='/Admin'
              className="block py-2 px-4 rounded hover:bg-gray-300"
            >
              Dashboard
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard!</h2>
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;
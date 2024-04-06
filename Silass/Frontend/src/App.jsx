import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Page/Login";
import AdminDashboard from "./assets/Page/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeDashboard from "./assets/Page/EmployeeDashboard";
import EmployeeHome from "./assets/Page/EmployeeHome";
import EmployeeForm from "./assets/Page/EmployeeForm";
import ViewAllReport from "./assets/Page/ViewAllReport";
import ALogin from "./assets/Page/ALogin";
import AdminHome from "./assets/Page/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eLogin" element={<Login />} />
        <Route path="/aLogin" element={<ALogin/>} />
        <Route path="/Employee" element={<EmployeeDashboard />}>
          <Route index element={<EmployeeHome />} />
          <Route path="/Employee/Form" element={<EmployeeForm />} />
          <Route path="/Employee/All" element={<ViewAllReport/>} />
        </Route>
        <Route path="/Admin" element={<AdminDashboard />} >
          <Route index element={<AdminHome/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

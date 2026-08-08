import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Assignment from "./pages/assignment";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignment" element={<Assignment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

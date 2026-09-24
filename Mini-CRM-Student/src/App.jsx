import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import data from "./data/mockData.json";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerList from "./pages/CustomerList";
import AddCustomer from "./pages/AddCustomer";
import CustomerDetails from "./pages/CustomerDetails";

export default function App() {
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("customers");
    return saved ? JSON.parse(saved) : data;
  });

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const logged = localStorage.getItem("login") === "yes";

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to={logged ? "/dashboard" : "/login"} />} />
      <Route path="/dashboard" element={logged ? <Dashboard customers={customers}/> : <Navigate to="/login"/>} />
      <Route path="/customers" element={logged ? <CustomerList customers={customers} setCustomers={setCustomers}/> : <Navigate to="/login"/>} />
      <Route path="/add" element={logged ? <AddCustomer customers={customers} setCustomers={setCustomers}/> : <Navigate to="/login"/>} />
      <Route path="/customers/:id" element={logged ? <CustomerDetails customers={customers} setCustomers={setCustomers}/> : <Navigate to="/login"/>} />
    </Routes>
  );
}
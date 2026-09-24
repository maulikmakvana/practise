import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mini CRM</h2>
      <p>Customer Management</p>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/customers">Customers</NavLink>
      <NavLink to="/customers?status=Follow-up">Follow-ups</NavLink>
      <NavLink to="/customers">Activities</NavLink>
      <NavLink to="/dashboard">Settings</NavLink>
      <NavLink to="/login" className="logout">Logout</NavLink>
    </aside>
  );
}
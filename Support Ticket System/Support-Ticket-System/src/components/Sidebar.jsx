import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">

            <h2>HelpDesk</h2>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/tickets">Tickets</Link>

            <Link to="/create-ticket">Create Ticket</Link>

        </div>
    );
}

export default Sidebar;
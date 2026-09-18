import { Link } from "react-router-dom";
import { tickets, users } from "../data/mockData";
import { useState } from "react";

function Tickets() {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    let data = tickets.filter((ticket) => {

        return (
            (ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
            ticket.ticket_id.toLowerCase().includes(search.toLowerCase()))
            &&
            (status == "" || ticket.status == status)
            &&
            (priority == "" || ticket.priority == priority)
        );

    });

    return (
        <div>

            <h1>Tickets</h1>

            <div className="filters">

                <input
                    placeholder="Search ticket..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                </select>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">All Priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>

            </div>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((ticket) => {

                        let user = users.find(
                            (u) => u.id == ticket.assigned_to
                        );

                        return (
                            <tr key={ticket.id}>

                                <td>{ticket.ticket_id}</td>

                                <td>{ticket.subject}</td>

                                <td>{ticket.priority}</td>

                                <td>{ticket.status}</td>

                                <td>{user?.name}</td>

                                <td>
                                    <Link to={`/tickets/${ticket.id}`}>
                                        View
                                    </Link>
                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

        </div>
    );
}

export default Tickets;
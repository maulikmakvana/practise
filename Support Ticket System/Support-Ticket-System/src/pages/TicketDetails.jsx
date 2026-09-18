import { useParams, useNavigate } from "react-router-dom";
import { tickets, users } from "../data/mockData";
import { useState } from "react";

function TicketDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    let ticket = tickets.find(
        (ticket) => ticket.id == id
    );

    const [status, setStatus] = useState(ticket.status);
    const [assigned, setAssigned] = useState(ticket.assigned_to);

    function updateTicket() {

        ticket.status = status;
        ticket.assigned_to = Number(assigned);

        alert("Ticket Updated!");

        navigate("/tickets");
    }

    return (
        <div>

            <h1>Ticket Details</h1>

            <div className="details">

                <h2>{ticket.ticket_id}</h2>

                <p>
                    <b>Subject:</b> {ticket.subject}
                </p>

                <p>
                    <b>Description:</b> {ticket.description}
                </p>

                <p>
                    <b>Priority:</b> {ticket.priority}
                </p>

                <p>
                    <b>Created:</b> {ticket.created_at}
                </p>

                <label>Status</label>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                </select>

                <label>Assign To</label>

                <select
                    value={assigned}
                    onChange={(e) => setAssigned(e.target.value)}
                >

                    {users
                        .filter((user) => user.role == "support")
                        .map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))
                    }

                </select>

                <button onClick={updateTicket}>
                    Update Ticket
                </button>

            </div>

        </div>
    );
}

export default TicketDetails;
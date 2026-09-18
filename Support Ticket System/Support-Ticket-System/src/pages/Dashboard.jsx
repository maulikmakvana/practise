import { tickets } from "../data/mockData";

function Dashboard() {

    let total = tickets.length;

    let open = tickets.filter(
        (ticket) => ticket.status == "Open"
    ).length;

    let progress = tickets.filter(
        (ticket) => ticket.status == "In Progress"
    ).length;

    let resolved = tickets.filter(
        (ticket) => ticket.status == "Resolved"
    ).length;

    let closed = tickets.filter(
        (ticket) => ticket.status == "Closed"
    ).length;

    let high = tickets.filter(
        (ticket) => ticket.priority == "High"
    ).length;

    return (
        <div>

            <h1>Dashboard</h1>

            <div className="cards">

                <div>Total Tickets <b>{total}</b></div>

                <div>Open <b>{open}</b></div>

                <div>In Progress <b>{progress}</b></div>

                <div>Resolved <b>{resolved}</b></div>

                <div>Closed <b>{closed}</b></div>

                <div>High Priority <b>{high}</b></div>

            </div>

            <h2>Recent Tickets</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {tickets.map((ticket) => (

                        <tr key={ticket.id}>

                            <td>{ticket.ticket_id}</td>

                            <td>{ticket.subject}</td>

                            <td>{ticket.priority}</td>

                            <td>{ticket.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Dashboard;
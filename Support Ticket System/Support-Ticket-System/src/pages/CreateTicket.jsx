import { useNavigate } from "react-router-dom";
import { users, tickets } from "../data/mockData";
import { useState } from "react";

function CreateTicket() {

    const navigate = useNavigate();

    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");
    const [assigned, setAssigned] = useState("");

    function createTicket() {

        if (subject == "" || description == "") {
            alert("Please fill required fields");
            return;
        }

        let newTicket = {
            id: tickets.length + 1,
            ticket_id: "TCK-" + (1026 + tickets.length),
            subject: subject,
            description: description,
            priority: priority,
            status: "Open",
            assigned_to: Number(assigned),
            created_at: new Date().toISOString().slice(0, 10)
        };

        tickets.push(newTicket);

        alert("Ticket Created!");

        navigate("/tickets");
    }

    return (
        <div>

            <h1>Create Ticket</h1>

            <div className="form-box">

                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>

                <select
                    value={assigned}
                    onChange={(e) => setAssigned(e.target.value)}
                >
                    <option value="">Select Employee</option>

                    {users
                        .filter((user) => user.role == "support")
                        .map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))
                    }

                </select>

                <button onClick={createTicket}>
                    Create Ticket
                </button>

            </div>

        </div>
    );
}

export default CreateTicket;
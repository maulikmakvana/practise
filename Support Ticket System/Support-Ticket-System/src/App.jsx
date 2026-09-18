import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";

function App() {

    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route
                path="/*"
                element={
                    <div className="app">

                        <Sidebar />

                        <div className="main">

                            <Header />

                            <div className="content">

                                <Routes>

                                    <Route
                                        path="/dashboard"
                                        element={<Dashboard />}
                                    />

                                    <Route
                                        path="/tickets"
                                        element={<Tickets />}
                                    />

                                    <Route
                                        path="/create-ticket"
                                        element={<CreateTicket />}
                                    />

                                    <Route
                                        path="/tickets/:id"
                                        element={<TicketDetails />}
                                    />

                                </Routes>

                            </div>

                        </div>

                    </div>
                }
            />

        </Routes>
    );
}

export default App;
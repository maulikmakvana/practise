import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {

        if (email == "" || password == "") {
            alert("Please enter email and password");
            return;
        }

        navigate("/dashboard");
    }

    return (
        <div className="login">

            <div className="login-box">

                <h1>HelpDesk Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>
                    Login
                </button>

                <p>Demo: support@company.com / 123456</p>

            </div>

        </div>
    );
}

export default Login;
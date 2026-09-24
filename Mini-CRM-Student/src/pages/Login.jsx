import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("login", "yes");
      navigate("/dashboard");
    } else {
      alert("Use admin@gmail.com / 123456");
    }
  }

  return (
    <div className="loginPage">
      <div className="loginArt">
        <h1>Mini CRM</h1>
        <p>Customer Relationship Management System</p>
      </div>

      <form className="loginBox" onSubmit={login}>
        <h2>Welcome Back</h2>
        <p>Login to your CRM account</p>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
        <div className="passBox">
          <input type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="button" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        <button className="primary">Login</button>
        <small>Demo: admin@gmail.com / 123456</small>
      </form>
    </div>
  );
}
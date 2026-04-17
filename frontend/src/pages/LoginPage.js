import { useState } from "react";
import API from "../services/api";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post("users/login/", data);

    if (res.data.username) {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("user_id", res.data.user_id);
      navigate("/dashboard");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
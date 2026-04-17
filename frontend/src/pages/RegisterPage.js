import { useState } from "react";
import API from "../services/api";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegister = async () => {
    await API.post("users/add_user/", data);
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="register">
      <h2>Register</h2>

      <input
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
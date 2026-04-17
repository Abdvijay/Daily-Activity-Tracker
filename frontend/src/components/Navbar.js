import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">Daily Tracker</div>

      <div className="center">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/checklist">Checklist</Link>
        <Link to="/reports">Reports</Link>
      </div>

      <div className="right">
        {username} | <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
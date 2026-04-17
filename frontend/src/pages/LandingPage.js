import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Daily Activity Tracker</h1>
      <p>Track your daily progress easily</p>

      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default LandingPage;
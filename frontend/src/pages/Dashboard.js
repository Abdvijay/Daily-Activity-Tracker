import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Charts will be displayed here</p>
      </div>
    </>
  );
}

export default Dashboard;
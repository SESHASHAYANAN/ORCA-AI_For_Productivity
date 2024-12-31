import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Community from "./Community";
import TeamChat from "./Chatroom";

// CSS Styles (unchanged)
const styles = `
  .booking-system {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .header {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .header nav a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  .header nav a:hover {
    color: #ddd;
  }

  .filters {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .hall-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .hall-card:hover {
    transform: translateY(-5px);
  }

  .hall-name {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #1e3c72;
    cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  }

  .hall-info {
    margin-bottom: 15px;
    color: #666;
  }

  .time-slots {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
    margin-top: 15px;
  }

  .time-slot {
    padding: 8px;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-size: 16px;
  }

  .available {
    background: #e3f2fd;
    color: #1e88e5;
    border: 1px solid #90caf9;
  }

  .booked {
    background: #ffebee;
    color: #e53935;
    border: 1px solid #ef9a9a;
  }

  .pending {
    background: #fff3e0;
    color: #fb8c00;
    border: 1px solid #ffcc80;
  }
  .hall-name {
    text-decoration: none;
    color: inherit; /* Optional: ensures the color remains consistent */
  }
  a {
    text-decoration: none;
  }
  
  
`;

// Data (unchanged)
const teamData = [
  {
    id: 1,
    team: "Developer Team 💻",
    department: "Development",
    members: 10,
    goals: ["Feature Development", "Code Review", "Bug Fixes"],
    timeSlots: [
      { time: "09:00-09:40", status: "available" },
      { time: "09:40-10:20", status: "booked" },
      { time: "10:20-11:00", status: "pending" },
    ],
  },
  {
    id: 2,
    team: "Testing Team 🧪",
    department: "QA & Testing",
    members: 5,
    goals: ["Test Automation", "Regression Testing", "Bug Reporting"],
    timeSlots: [
      { time: "09:00-09:40", status: "booked" },
      { time: "09:40-10:20", status: "available" },
      { time: "10:20-11:00", status: "available" },
    ],
  },
  {
    id: 3,
    team: "Product Management 📝",
    department: "Product",
    members: 8,
    goals: ["Roadmap Planning", "Stakeholder Communication", "User Feedback"],
    timeSlots: [
      { time: "09:00-09:40", status: "available" },
      { time: "09:40-10:20", status: "booked" },
      { time: "10:20-11:00", status: "pending" },
    ],
  },
];

// Home Page
const HomePage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const navigate = useNavigate();

  const filteredTeams =
    selectedDepartment === "all"
      ? teamData
      : teamData.filter((team) => team.department === selectedDepartment);

  return (
    <div>
      <style>{styles}</style>
      <div className="booking-system">
        <div className="header">
          <h1>🏢 ORCA AI </h1>
          <p>Track and align teams to organizational goals</p>
          <nav>
            <Link to="/schedule">📅 Schedule</Link>&nbsp;|&nbsp;
            <Link to="/community">👥 Community</Link>&nbsp;|&nbsp;
            <Link to="/chat">💬 Chat</Link>
          </nav>
        </div>

        <div className="filters">
          <select
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
            }}
          >
            <option value="all">All Departments</option>
            <option value="Development">Development</option>
            <option value="QA & Testing">QA & Testing</option>
            <option value="Product">Product</option>
          </select>
        </div>

        <div className="calendar">
          {filteredTeams.map((team) => (
            <div key={team.id} className="hall-card">
              <Link to="/project-tracker" className="hall-name">
                {team.team}
              </Link>
              <div className="hall-info">
                <p>🏢 Department: {team.department}</p>
                <p>👥 Members: {team.members} people</p>
                <p>🎯 Goals: {team.goals.join(", ")}</p>
              </div>
              <div className="time-slots">
                {team.timeSlots.map((slot, index) => (
                  <div key={index} className={`time-slot ${slot.status}`}>
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// App Component (unchanged)
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project-tracker" element={<ProjectTracker />} />
      <Route path="/schedule" element={<TeamAlignmentSystem />} />
      <Route path="/community" element={<Community />} />
      <Route path="/chat" element={<TeamChat />} />
    </Routes>
  </Router>
);

export default App;




/*import React from "react";
import "../pages/styles/dashboard.css";

const DashboardHome = () => {
  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>
      <p className="subtitle">
        Monitor player performance, manage training programs, and ensure athlete well-being.
      </p>

     
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Assigned Players</h3>
          <p>48</p>
        </div>
        <div className="stat-card">
          <h3>Active Programs</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Sessions</h3>
          <p>7</p>
        </div>
        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>3</p>
        </div>
      </div>

    
      <div className="card">
        <h2>Assigned Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liam Johnson</td>
              <td>Midfielder</td>
              <td>U-18 Thunder</td>
              <td>
                <button>Readiness</button>
                <button>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Olivia Smith</td>
              <td>Forward</td>
              <td>U-18 Thunder</td>
              <td>
                <button>Readiness</button>
                <button>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Noah Williams</td>
              <td>Defender</td>
              <td>U-18 Thunder</td>
              <td>
                <button>Readiness</button>
                <button>Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

     
      <div className="card readiness">
        <h2>Current Readiness</h2>
        <div className="circle">85%</div>
        <p className="good">Good – Optimal training load maintained</p>
      </div>

     
      <div className="card alert">
        <h2>Injury Risk Alerts</h2>
        <ul>
          <li>Noah Williams – High hamstring strain risk</li>
          <li>Liam Johnson – Fatigue accumulation</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;*/







/*import React, { useEffect, useState } from "react";
import "../pages/styles/dashboard.css";

const DashboardHome = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Total players
      const playersRes = await fetch("http://localhost:5000/api/players");
      const playersData = await playersRes.json();
      setPlayers(playersData);
      setTotalPlayers(playersData.length);

      // Average readiness
      const readinessRes = await fetch(
        "http://localhost:5000/api/players/average-readiness"
      );
      const readinessData = await readinessRes.json();
      setAvgReadiness(readinessData.averageReadiness);

      // Players at risk
      const riskRes = await fetch(
        "http://localhost:5000/api/players/at-risk"
      );
      const riskData = await riskRes.json();
      setPlayersAtRisk(riskData.count);
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>
      <p className="subtitle">
        Monitor player performance, manage training programs, and ensure athlete well-being.
      </p>

      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

     
      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.current_team}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className="good">
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;*/







/*import React, { useEffect, useState } from "react";
import "../pages/styles/dashboard.css";

const DashboardHome = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      
      const playersRes = await fetch("http://localhost:5000/api/players");
      const playersData = await playersRes.json();
      setPlayers(playersData);
      setTotalPlayers(playersData.length);

    
      const assessmentRes = await fetch(
        "http://localhost:5000/api/player-assessments"
      );
      const assessmentData = await assessmentRes.json();

      if (assessmentData.length > 0) {
        const totalReadiness = assessmentData.reduce(
          (sum, item) => sum + Number(item.readiness_score),
          0
        );

        const average = Math.round(
          totalReadiness / assessmentData.length
        );

        setAvgReadiness(average);

       
        const riskCount = assessmentData.filter(
          (item) => item.readiness_score < 50
        ).length;

        setPlayersAtRisk(riskCount);
      } else {
        setAvgReadiness(0);
        setPlayersAtRisk(0);
      }
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>
      <p className="subtitle">
        Monitor player performance, manage training programs, and ensure athlete well-being.
      </p>

     
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

  
      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.current_team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className={avgReadiness >= 75 ? "good" : "warning"}>
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;*/








/*import React, { useEffect, useState } from "react";
import "../pages/styles/dashboard.css";

const DashboardHome = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      
      const playersRes = await fetch("http://localhost:5000/api/players");
      const playersData = await playersRes.json();
      setPlayers(playersData);
      setTotalPlayers(playersData.length);

      
      const avgRes = await fetch(
        "http://localhost:5000/api/player-assessments/average-readiness"
      );
      const avgData = await avgRes.json();
      setAvgReadiness(avgData.averageReadiness);

      
      const assessRes = await fetch(
        "http://localhost:5000/api/player-assessments"
      );
      const assessData = await assessRes.json();

      const assessments =
        assessData.rows || assessData.data || assessData || [];

      const riskCount = assessments.filter(
        (a) => Number(a.readiness) < 50
      ).length;

      setPlayersAtRisk(riskCount);
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>
      <p className="subtitle">
        Monitor player performance, manage training programs, and ensure athlete well-being.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.current_team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className={avgReadiness >= 75 ? "good" : "warning"}>
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;*/






/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/styles/dashboard.css";

const Dashboard = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchDashboard();
    fetchPlayers();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setTotalPlayers(res.data.totalPlayers);
    setAvgReadiness(res.data.averageReadiness);
    setPlayersAtRisk(res.data.playersAtRisk);
  };

  const fetchPlayers = async () => {
    const res = await axios.get("http://localhost:5000/api/players");
    setPlayers(res.data);
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.position}</td>
                <td>{p.current_team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className={avgReadiness >= 75 ? "good" : "warning"}>
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;*/







/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/styles/dashboard.css";

const Dashboard = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchDashboard();
    fetchPlayers();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setTotalPlayers(res.data.totalPlayers);
    setAvgReadiness(res.data.averageReadiness);
    setPlayersAtRisk(res.data.playersAtRisk);
  };

  const fetchPlayers = async () => {
    const res = await axios.get("http://localhost:5000/api/players");
    setPlayers(res.data);
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.position}</td>
                <td>{p.current_team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className={avgReadiness >= 75 ? "good" : "warning"}>
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;*/








import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/styles/dashboard.css";

const Dashboard = () => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [avgReadiness, setAvgReadiness] = useState(0);
  const [playersAtRisk, setPlayersAtRisk] = useState(0);
  const [players, setPlayers] = useState([]);

  /* ✅ NEW STATE (does not affect others) */
  const [atRiskPlayers, setAtRiskPlayers] = useState([]);

  useEffect(() => {
    fetchDashboard();
    fetchPlayers();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setTotalPlayers(res.data.totalPlayers);
    setAvgReadiness(res.data.averageReadiness);
    setPlayersAtRisk(res.data.playersAtRisk);

    /* ✅ NEW (safe addition) */
    setAtRiskPlayers(res.data.atRiskPlayers || []);
  };

  const fetchPlayers = async () => {
    const res = await axios.get("http://localhost:5000/api/players");
    setPlayers(res.data);
  };

  return (
    <div className="dashboard-container">
      <h1>Trainer Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Players</h3>
          <p>{totalPlayers}</p>
        </div>

        <div className="stat-card">
          <h3>Average Readiness</h3>
          <p>{avgReadiness}%</p>
        </div>

        <div className="stat-card danger">
          <h3>Players At Risk</h3>
          <p>{playersAtRisk}</p>
        </div>
      </div>

      <div className="card">
        <h2>Players</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.position}</td>
                <td>{p.current_team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card readiness">
        <h2>Overall Readiness Status</h2>
        <div className="circle">{avgReadiness}%</div>
        <p className={avgReadiness >= 75 ? "good" : "warning"}>
          {avgReadiness >= 75
            ? "Good – Optimal training load maintained"
            : "Warning – Monitor workload closely"}
        </p>
      </div>

      {/* ✅ NEW SECTION — matches your screenshot */}
      {atRiskPlayers.length > 0 && (
        <div className="card danger">
          <h2>Injury Risk Alerts</h2>
          <ul className="risk-list">
            {atRiskPlayers.map((player) => (
              <li key={player.id}>
                ⚠️ <strong>{player.name}</strong> — Readiness{" "}
                {player.readiness}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

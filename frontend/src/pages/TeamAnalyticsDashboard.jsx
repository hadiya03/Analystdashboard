import React, { useEffect, useState } from "react";
import "./trainingSessions.css";

const TeamAnalysisDashboard = () => {
  const [teams, setTeams] = useState({});
  const [bestTeam, setBestTeam] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch("http://localhost:5000/api/training-sessions");
    const data = await res.json();

    const map = {};

    data.forEach((s) => {
      const team = s.team_name || "Team A";

      if (!map[team]) {
        map[team] = {
          sessions: 0,
          minutes: 0,
          distance: 0,
          sprints: 0,
          rpeTotal: 0,
          goals: 0,
        };
      }

      map[team].sessions++;
      map[team].minutes += +s.duration_minutes || 0;
      map[team].distance += +s.distance_km || 0;
      map[team].sprints += +s.sprint_count || 0;
      map[team].rpeTotal += +s.rpe || 0;
      map[team].goals += +s.goals || 0;
    });

    // calculate score
    let winner = "";
    let bestScore = -Infinity;

    Object.entries(map).forEach(([name, t]) => {
      const avgRpe = t.rpeTotal / t.sessions;

      const score =
        t.goals * 5 +
        t.distance * 2 +
        t.sprints -
        avgRpe * 3;

      t.avgRpe = avgRpe.toFixed(1);
      t.score = score.toFixed(1);

      if (score > bestScore) {
        bestScore = score;
        winner = name;
      }
    });

    setTeams(map);
    setBestTeam(winner);
  };

  return (
    <div className="dashboard-container">
      <h2>Team Performance Analysis</h2>

      {/* ✅ Winner Banner */}
      {bestTeam && (
        <div className="winner-box">
          🏆 Best Performing Team: <strong>{bestTeam}</strong>
        </div>
      )}

      <table className="team-table">
        <thead>
          <tr>
            <th>Metric</th>
            {Object.keys(teams).map((t) => (
              <th key={t} className={t === bestTeam ? "winner-col" : ""}>
                {t}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <Row label="Sessions" field="sessions" teams={teams} />
          <Row label="Minutes" field="minutes" teams={teams} />
          <Row label="Distance (km)" field="distance" teams={teams} />
          <Row label="Sprints" field="sprints" teams={teams} />
          <Row label="Goals" field="goals" teams={teams} />
          <Row label="Avg RPE" field="avgRpe" teams={teams} />
          <Row label="Performance Score" field="score" teams={teams} />
        </tbody>
      </table>
    </div>
  );
};

const Row = ({ label, field, teams }) => (
  <tr>
    <td>{label}</td>
    {Object.values(teams).map((t, i) => (
      <td key={i}>{t[field]}</td>
    ))}
  </tr>
);

export default TeamAnalysisDashboard;

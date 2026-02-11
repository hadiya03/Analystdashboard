



/*import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./updateAssessment.css";

const UpdateAssessment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [playerInput, setPlayerInput] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        setLoading(true);
        // Fetching exactly the 12 fields from your API
        const res = await fetch(`http://localhost:5000/api/players/${id}/daily-input`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.rpe) {
            setPlayerInput(data);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching metrics:", err);
        setLoading(false);
      }
    };
    fetchPlayerData();
  }, [id]);

  const handleEmailReminder = async () => {
    try {
      await fetch(`http://localhost:5000/api/players/${id}/send-reminder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Please enter your 12 daily metrics." })
      });
      alert("Reminder email sent!");
    } catch (err) {
      alert("Failed to send email.");
    }
  };

  const calculateAndSync = async () => {
    if (!playerInput) {
      alert("Cannot calculate: Player data is missing!");
      return;
    }

    const fatigue = (playerInput.rpe * 0.5) + (playerInput.tiredness * 0.3) + (playerInput.soreness * 0.2);
    const readiness = Math.max(0, Math.min(100, (
      playerInput.sleepHour + 
      (10 - playerInput.rpe) + 
      (10 - playerInput.tiredness) + 
      (10 - playerInput.soreness)
    ) * 2.5));

    const updatedResult = {
      readiness: Number(readiness.toFixed(1)),
      fatigue: Number(fatigue.toFixed(1)),
      coachNotes: coachNotes
    };

    try {
      await fetch(`http://localhost:5000/api/assessments/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedResult)
      });
      setResult(updatedResult);
      alert("Assessment synced successfully!");
    } catch (error) {
      alert("Sync failed.");
    }
  };

  if (loading) return <div className="assessment-container">Loading...</div>;

  return (
    <div className="assessment-container">
      <h2>Player Performance Assessment</h2>
      <p className="subtitle">Analyst Review Dashboard</p>

      
      <div className="metrics-grid">
        <div className="metric-card"><span>RPE :</span><strong>{playerInput?.rpe || "N/A"}</strong></div>
        <div className="metric-card"><span>Sleep Hour :</span><strong>{playerInput?.sleepHour || "N/A"}h</strong></div>
        <div className="metric-card"><span>Tiredness :</span><strong>{playerInput?.tiredness || "N/A"}</strong></div>
        <div className="metric-card"><span>Duration :</span><strong>{playerInput?.duration || "N/A"}m</strong></div>
        <div className="metric-card"><span>Soreness :</span><strong>{playerInput?.soreness || "N/A"}</strong></div>
        <div className="metric-card"><span>Strength :</span><strong>{playerInput?.strength || "N/A"}</strong></div>
        <div className="metric-card"><span>Endurance :</span><strong>{playerInput?.endurance || "N/A"}</strong></div>
        <div className="metric-card"><span>Balance :</span><strong>{playerInput?.balance || "N/A"}</strong></div>
        <div className="metric-card"><span>Speed :</span><strong>{playerInput?.speed || "N/A"}</strong></div>
        <div className="metric-card"><span>Flexibility :</span><strong>{playerInput?.flexibility || "N/A"}</strong></div>
        <div className="metric-card"><span>Cardio Fitness :</span><strong>{playerInput?.cardio || "N/A"}</strong></div>
        <div className="metric-card"><span>Agility :</span><strong>{playerInput?.agility || "N/A"}</strong></div>
      </div>

      
      {!playerInput && (
        <div className="no-data-alert">
          <p>⚠️ Missing player data. Calculations will use "0" until player submits.</p>
          <button className="reminder-btn" onClick={handleEmailReminder}>Email Reminder</button>
        </div>
      )}

     
      <div className="notes-container">
        <h3>Coach Notes</h3>
        <textarea
          rows="5"
          placeholder="Enter feedback for the player dashboard here..."
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
        />
        
        <div className="action-buttons">
          <button 
            className="sync-btn" 
            onClick={calculateAndSync}
            style={{ opacity: playerInput ? 1 : 0.5 }}
          >
            Calculate & Sync to Player Dashboard
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>Back to Roster</button>
        </div>
      </div>

      {result && (
        <div className="final-results">
          <p>Calculated Readiness: <strong>{result.readiness}%</strong></p>
          <p>Calculated Fatigue: <strong>{result.fatigue}</strong></p>
        </div>
      )}
    </div>
  );
};

export default UpdateAssessment;*/


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./updateAssessment.css";

const UpdateAssessment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [playerInput, setPlayerInput] = useState(null);
  const [playerProfile, setPlayerProfile] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        setLoading(true);
        
        const resMetrics = await fetch(`http://localhost:5000/api/players/${id}/daily-input`);
        if (resMetrics.ok) {
          const data = await resMetrics.json();
          if (data) setPlayerInput(data);
        }

        const resProfile = await fetch(`http://localhost:5000/api/players/${id}`);
        if (resProfile.ok) {
          const data = await resProfile.json();
          setPlayerProfile(data);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };
    fetchPlayerData();
  }, [id]);

 // ✅ FIXED ENDPOINT (removed /players)
const handleEmailReminder = async () => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/assessments/${id}/send-reminder`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }
    );

    if (res.ok) {
      alert("Reminder email sent successfully!");
    } else {
      const errData = await res.json();
      alert(`Failed: ${errData.error || "Server error"}`);
    }
  } catch (err) {
    alert("Failed to send email. Check your connection.");
  }
};


  const calculateAndSync = async () => {
    if (!playerInput) {
      alert("Cannot calculate: Player metrics data is missing!");
      return;
    }

    const fatigue =
      (playerInput.rpe * 0.5) +
      (playerInput.tiredness * 0.3) +
      (playerInput.soreness * 0.2);

    const readiness = Math.max(
      0,
      Math.min(
        100,
        (
          playerInput.sleepHour +
          (10 - playerInput.rpe) +
          (10 - playerInput.tiredness) +
          (10 - playerInput.soreness)
        ) * 2.5
      )
    );

    const updatedResult = {
      ...playerInput,
      readiness: Number(readiness.toFixed(1)),
      fatigue: Number(fatigue.toFixed(1)),
      coachNotes: coachNotes
    };

    try {
      const res = await fetch(`http://localhost:5000/api/assessments/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedResult)
      });
      
      if (res.ok) {
        setResult(updatedResult);
        alert("Assessment synced and update email sent!");
      } else {
        alert("Sync failed on server.");
      }
    } catch (error) {
      alert("Sync failed.");
    }
  };

  if (loading) return <div className="assessment-container">Loading...</div>;

  return (
    <div className="assessment-container">
      <h2>Player Performance Assessment</h2>
      <p className="subtitle">
        Analyst Review Dashboard for {playerProfile?.name || "Player"}
      </p>

      <div className="metrics-grid">
        <div className="metric-card"><span>RPE :</span><strong>{playerInput?.rpe || "N/A"}</strong></div>
        <div className="metric-card"><span>Sleep Hour :</span><strong>{playerInput?.sleepHour || "N/A"}h</strong></div>
        <div className="metric-card"><span>Tiredness :</span><strong>{playerInput?.tiredness || "N/A"}</strong></div>
        <div className="metric-card"><span>Duration :</span><strong>{playerInput?.duration || "N/A"}m</strong></div>
        <div className="metric-card"><span>Soreness :</span><strong>{playerInput?.soreness || "N/A"}</strong></div>
        <div className="metric-card"><span>Strength :</span><strong>{playerInput?.strength || "N/A"}</strong></div>
        <div className="metric-card"><span>Endurance :</span><strong>{playerInput?.endurance || "N/A"}</strong></div>
        <div className="metric-card"><span>Balance :</span><strong>{playerInput?.balance || "N/A"}</strong></div>
        <div className="metric-card"><span>Speed :</span><strong>{playerInput?.speed || "N/A"}</strong></div>
        <div className="metric-card"><span>Flexibility :</span><strong>{playerInput?.flexibility || "N/A"}</strong></div>
        <div className="metric-card"><span>Cardio Fitness :</span><strong>{playerInput?.cardio || "N/A"}</strong></div>
        <div className="metric-card"><span>Agility :</span><strong>{playerInput?.agility || "N/A"}</strong></div>
      </div>

      {(!playerInput || Object.keys(playerInput).length === 0) && (
        <div className="no-data-alert">
          <p>⚠️ Missing player metrics. Calculations will use "0" until player submits.</p>
          <button className="reminder-btn" onClick={handleEmailReminder}>
            Email Reminder
          </button>
        </div>
      )}

      <div className="notes-container">
        <h3>Coach Notes</h3>
        <textarea
          rows="5"
          placeholder="Enter feedback for the player dashboard here..."
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
        />
        
        <div className="action-buttons">
          <button
            className="sync-btn"
            onClick={calculateAndSync}
            style={{ opacity: playerInput ? 1 : 0.5 }}
          >
            Calculate & Sync to Player Dashboard
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back to Roster
          </button>
        </div>
      </div>

      {result && (
        <div className="final-results">
          <p>Calculated Readiness: <strong>{result.readiness}%</strong></p>
          <p>Calculated Fatigue: <strong>{result.fatigue}</strong></p>
        </div>
      )}
    </div>
  );
};

export default UpdateAssessment;

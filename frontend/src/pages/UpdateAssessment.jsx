
/*import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./updateAssessment.css";

const UpdateAssessment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    trainingLoad: "",
    sleepHours: "",
    soreness: "",
    stress: "",
    pain: "",
    skillScore: ""
  });
  const [errors, setErrors] = useState({});
  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const validateField = (name, value) => {
    if (
      ["trainingLoad", "sleepHours", "soreness", "stress", "pain"].includes(name)
    ) {
      if (value < 1 || value > 10) {
        return "Value must be between 1 and 10";
      }
    }

    if (name === "skillScore") {
      if (value < 0 || value > 100) {
        return "Skill score must be between 0 and 100";
      }
    }

    return "";
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;

    const error = validateField(name, value);

    setErrors({ ...errors, [name]: error });
    setForm({ ...form, [name]: value });
  };

  const calculateAssessment = async () => {
    const hasErrors = Object.values(errors).some((e) => e);
    if (hasErrors) {
      alert("Please fix input errors before saving");
      return;
    }

   

    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(
        100,
        (
          form.sleepHours +
          (10 - form.trainingLoad) +
          (10 - form.soreness) +
          (10 - form.stress) +
          (10 - form.pain)
        ) * 2
      )
    );

    const skillGap = Math.max(0, 100 - form.skillScore);

  

    const updatedResult = {
      fatigue: Number(fatigue.toFixed(1)),
      readiness: Number(readiness.toFixed(1)),
      skillGap: Number(skillGap.toFixed(1))
    };

    setResult(updatedResult);

    try {
      const res = await fetch(`http://localhost:5000/api/assessments/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trainingLoad: form.trainingLoad,
          sleepHours: form.sleepHours,
          soreness: form.soreness,
          stress: form.stress,
          pain: form.pain,
          skillScore: form.skillScore,
          readiness: updatedResult.readiness,
          fatigue: updatedResult.fatigue,
          skillGap: updatedResult.skillGap,
          coachNotes: coachNotes
        })
      });

      if (!res.ok) throw new Error("Failed to save assessment");

      navigate(`/players/${id}/readiness`);
    } catch (error) {
      console.error("Assessment save error:", error);
      alert("Failed to save assessment");
    }
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load
          <input
            name="trainingLoad"
            type="number"
            min="1"
            max="10"
            placeholder="1–10"
            onChange={handleChange}
          />
          {errors.trainingLoad && <small style={{ color: "red" }}>{errors.trainingLoad}</small>}
        </label>

        <label>
          Sleep Hours
          <input
            name="sleepHours"
            type="number"
            min="1"
            max="10"
            placeholder="1–10"
            onChange={handleChange}
          />
          {errors.sleepHours && <small style={{ color: "red" }}>{errors.sleepHours}</small>}
        </label>

        <label>
          Muscle Soreness
          <input
            name="soreness"
            type="number"
            min="1"
            max="10"
            placeholder="1–10"
            onChange={handleChange}
          />
          {errors.soreness && <small style={{ color: "red" }}>{errors.soreness}</small>}
        </label>

        <label>
          Stress Level
          <input
            name="stress"
            type="number"
            min="1"
            max="10"
            placeholder="1–10"
            onChange={handleChange}
          />
          {errors.stress && <small style={{ color: "red" }}>{errors.stress}</small>}
        </label>

        <label>
          Injury Pain
          <input
            name="pain"
            type="number"
            min="1"
            max="10"
            placeholder="1–10"
            onChange={handleChange}
          />
          {errors.pain && <small style={{ color: "red" }}>{errors.pain}</small>}
        </label>

        <label>
          Skill Score
          <input
            name="skillScore"
            type="number"
            min="0"
            max="100"
            placeholder="0–100"
            onChange={handleChange}
          />
          {errors.skillScore && <small style={{ color: "red" }}>{errors.skillScore}</small>}
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness</p>
          </div>
          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue</p>
          </div>
          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Coach Notes</h3>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          Send personalized feedback to the player.
        </p>

        <textarea
          rows="4"
          placeholder="Write feedback for the player (recovery advice, workload adjustment, injury caution, next-session focus, etc.)"
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button className="primary">Send</button>
      </div>

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}/readiness`)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateAssessment;*/



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

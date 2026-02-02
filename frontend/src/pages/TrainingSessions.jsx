/*import React, { useState } from "react";
import "./trainingSessions.css";

const TrainingSessions = () => {
  const [form, setForm] = useState({
    date: "",
    duration: "",
    distance: "",
    sprints: "",
    rpe: 5,
    minutesPlayed: "",
    notes: ""
  });

  const [sessions, setSessions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveSession = () => {
    if (!form.date || !form.duration) {
      alert("Please fill required fields");
      return;
    }

    setSessions([...sessions, form]);

    setForm({
      date: "",
      duration: "",
      distance: "",
      sprints: "",
      rpe: 5,
      minutesPlayed: "",
      notes: ""
    });
  };

  return (
    <div className="training-container">
      <h2>Record Training Session</h2>
      <p>Fill in the details for today’s training session.</p>

 
      <div className="form-card">
        <label>
          Session Date
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>

        <label>
          Duration (minutes)
          <input type="number" name="duration" value={form.duration} onChange={handleChange} />
        </label>

        <label>
          Distance Covered (km)
          <input type="number" name="distance" value={form.distance} onChange={handleChange} />
        </label>

        <label>
          Sprint Count
          <input type="number" name="sprints" value={form.sprints} onChange={handleChange} />
        </label>

        <label>
          Training Intensity (RPE): {form.rpe}
          <input
            type="range"
            min="1"
            max="10"
            name="rpe"
            value={form.rpe}
            onChange={handleChange}
          />
        </label>

        <label>
          Minutes Played
          <input
            type="number"
            name="minutesPlayed"
            value={form.minutesPlayed}
            onChange={handleChange}
          />
        </label>

        

        <div className="actions">
          <button className="secondary">Cancel</button>
          <button className="primary" onClick={saveSession}>
            Save Session
          </button>
        </div>
      </div>

      
      {sessions.length > 0 && (
        <>
          <h3>Saved Training Sessions</h3>
          <div className="sessions-list">
            {sessions.map((s, i) => (
              <div className="session-card" key={i}>
                <strong>{s.date}</strong>
                <p>Duration: {s.duration} mins</p>
                <p>Distance: {s.distance} km</p>
                <p>RPE: {s.rpe}</p>
                <p>{s.notes}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TrainingSessions;*/





import React, { useState, useEffect } from "react";
import "./trainingSessions.css";

const TrainingSessions = () => {
  const [form, setForm] = useState({
    session_date: "",
    duration_minutes: "",
    distance_km: "",
    sprint_count: "",
    rpe: 5,
    minutes_played: "",
  });

  const [sessions, setSessions] = useState([]);

  // Fetch sessions from backend on mount
  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/training-sessions");
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      console.error("Error fetching sessions:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveSession = async () => {
    if (!form.session_date || !form.duration_minutes) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/training-sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to save session");
      }

      const savedSession = await res.json();

      // Update local state with the saved session
      setSessions([savedSession, ...sessions]);

      // Reset form
      setForm({
        session_date: "",
        duration_minutes: "",
        distance_km: "",
        sprint_count: "",
        rpe: 5,
        minutes_played: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error saving session");
    }
  };

  return (
    <div className="training-container">
      <h2>Record Training Session</h2>
      <p>Fill in the details for today’s training session.</p>

      {/* ===== FORM ===== */}
      <div className="form-card">
        <label>
          Session Date
          <input
            type="date"
            name="session_date"
            value={form.session_date}
            onChange={handleChange}
          />
        </label>

        <label>
          Duration (minutes)
          <input
            type="number"
            name="duration_minutes"
            value={form.duration_minutes}
            onChange={handleChange}
          />
        </label>

        <label>
          Distance Covered (km)
          <input
            type="number"
            name="distance_km"
            value={form.distance_km}
            onChange={handleChange}
          />
        </label>

        <label>
          Sprint Count
          <input
            type="number"
            name="sprint_count"
            value={form.sprint_count}
            onChange={handleChange}
          />
        </label>

        <label>
          Training Intensity (RPE): {form.rpe}
          <input
            type="range"
            min="1"
            max="10"
            name="rpe"
            value={form.rpe}
            onChange={handleChange}
          />
        </label>

        <label>
          Minutes Played
          <input
            type="number"
            name="minutes_played"
            value={form.minutes_played}
            onChange={handleChange}
          />
        </label>

        <div className="actions">
          <button
            className="secondary"
            onClick={() =>
              setForm({
                session_date: "",
                duration_minutes: "",
                distance_km: "",
                sprint_count: "",
                rpe: 5,
                minutes_played: "",
              })
            }
          >
            Cancel
          </button>
          <button className="primary" onClick={saveSession}>
            Save Session
          </button>
        </div>
      </div>

      {/* ===== SAVED SESSIONS ===== */}
      {sessions.length > 0 && (
        <>
          <h3>Saved Training Sessions</h3>
          <div className="sessions-list">
            {sessions.map((s) => (
              <div className="session-card" key={s.id}>
                <strong>{s.session_date}</strong>
                <p>Duration: {s.duration_minutes} mins</p>
                <p>Distance: {s.distance_km || 0} km</p>
                <p>Sprints: {s.sprint_count || 0}</p>
                <p>RPE: {s.rpe}</p>
                <p>Minutes Played: {s.minutes_played || 0}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TrainingSessions;


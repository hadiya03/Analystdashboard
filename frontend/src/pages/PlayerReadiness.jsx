/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/players");
        if (!res.ok) throw new Error("Failed to fetch players");

        const data = await res.json();

        const players = Array.isArray(data)
          ? data
          : Array.isArray(data.players)
          ? data.players
          : [];

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        setPlayer(foundPlayer || null);
      } catch (error) {
        console.error(error);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{player.readiness_score ?? "N/A"}</h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{player.fatigue_score ?? "N/A"} / 10</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {player.readiness_score >= 7 ? "Good" : "Needs Attention"}
          </strong>
        </div>
      </div>

     
      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        <button className="primary">
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;*/





/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/players");
        if (!res.ok) throw new Error("Failed to fetch players");

        const data = await res.json();

        const players = Array.isArray(data)
          ? data
          : Array.isArray(data.players)
          ? data.players
          : [];

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        setPlayer(foundPlayer || null);
      } catch (error) {
        console.error(error);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{player.readiness_score ?? "N/A"}</h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{player.fatigue_score ?? "N/A"} / 10</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {player.readiness_score >= 7 ? "Good" : "Needs Attention"}
          </strong>
        </div>
      </div>

    
      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        
        <button
          className="primary"
          onClick={() => navigate(`/players/${id}/assessment`)}
        >
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;*/








/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/players");
        if (!res.ok) throw new Error("Failed to fetch players");

        const data = await res.json();

        const players = Array.isArray(data)
          ? data
          : Array.isArray(data.players)
          ? data.players
          : [];

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        setPlayer(foundPlayer || null);
      } catch (error) {
        console.error(error);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{player.readiness_score ?? "N/A"}</h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{player.fatigue_score ?? "N/A"} / 10</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {player.readiness_score >= 7 ? "Good" : "Needs Attention"}
          </strong>
        </div>
      </div>

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        
        <button
          className="primary"
          onClick={() => navigate(`/players/${id}/update-assessment`)}
        >
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;*/









/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/players");
        if (!res.ok) throw new Error("Failed to fetch players");

        const data = await res.json();

        const players = Array.isArray(data)
          ? data
          : Array.isArray(data.players)
          ? data.players
          : [];

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        if (!foundPlayer) {
          setPlayer(null);
          return;
        }

        // 1️⃣ Check localStorage for saved assessment
        const savedAssessment = localStorage.getItem(`player-${id}-assessment`);
        if (savedAssessment) {
          const assessment = JSON.parse(savedAssessment);
          foundPlayer.readiness_score = assessment.readiness;
          foundPlayer.fatigue_score = assessment.fatigue;
          foundPlayer.skillGap = assessment.skillGap;
        }

        // 2️⃣ Override with state passed from UpdateAssessment if available
        if (location.state?.updatedResult) {
          const { updatedResult } = location.state;
          foundPlayer.readiness_score = updatedResult.readiness;
          foundPlayer.fatigue_score = updatedResult.fatigue;
          foundPlayer.skillGap = updatedResult.skillGap;

          // Save to localStorage so it persists
          localStorage.setItem(
            `player-${id}-assessment`,
            JSON.stringify(updatedResult)
          );
        }

        setPlayer(foundPlayer);
      } catch (error) {
        console.error(error);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id, location.state]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{player.readiness_score ?? "N/A"}</h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{player.fatigue_score ?? "N/A"} / 10</strong>
        </div>

        <div className="card">
          <p>Skill Gap</p>
          <strong>{player.skillGap ?? "N/A"}</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {player.readiness_score >= 7 ? "Good" : "Needs Attention"}
          </strong>
        </div>
      </div>

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        <button
          className="primary"
          onClick={() => navigate(`/players/${id}/update-assessment`)}
        >
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;*/



/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
       
        const playerRes = await fetch("http://localhost:5000/api/players");
        const players = await playerRes.json();

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        if (!foundPlayer) {
          setPlayer(null);
          setLoading(false);
          return;
        }

        setPlayer(foundPlayer);

        
        const assessRes = await fetch(
          `http://localhost:5000/api/assessments/player/${id}`
        );

        if (assessRes.ok) {
          const assessData = await assessRes.json();
          setAssessment(assessData);
        } else {
          setAssessment(null);
        }
      } catch (err) {
        console.error(err);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [id]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{assessment?.readiness ?? "N/A"}</h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{assessment?.fatigue ?? "N/A"}</strong>
        </div>

        <div className="card">
          <p>Skill Gap</p>
          <strong>{assessment?.skill_gap ?? "N/A"}</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {assessment?.readiness >= 70
              ? "Good"
              : "Needs Attention"}
          </strong>
        </div>
      </div>

     
      {assessment?.coach_notes && (
        <div className="card" style={{ marginTop: "20px" }}>
          <h3>Coach Notes</h3>
          <p>{assessment.coach_notes}</p>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        <button
          className="primary"
          onClick={() => navigate(`/players/${id}/update-assessment`)}
        >
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;*/





import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerReadiness.css";

const PlayerReadiness = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        /* ===== FETCH PLAYER ===== */
        const playerRes = await fetch("http://localhost:5000/api/players");
        const players = await playerRes.json();

        const foundPlayer = players.find(
          (p) => String(p.id) === String(id)
        );

        if (!foundPlayer) {
          setPlayer(null);
          setLoading(false);
          return;
        }

        setPlayer(foundPlayer);

        /* ===== FETCH LATEST ASSESSMENT (✅ FIXED ROUTE) ===== */
        const assessRes = await fetch(
          `http://localhost:5000/api/assessments/${id}`
        );

        if (assessRes.ok) {
          const assessData = await assessRes.json();
          setAssessment(assessData);
        } else {
          setAssessment(null);
        }
      } catch (err) {
        console.error(err);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [id]);

  if (loading) return <p>Loading player readiness...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="readiness-container">
      <h2>Player Readiness & Fatigue</h2>

      <h3>{player.name}</h3>
      <p>{player.position}</p>

      <div className="readiness-cards">
        <div className="card">
          <h1>{assessment?.readiness ?? "N/A"} / 100 </h1>
          <p>Overall Readiness</p>
        </div>

        <div className="card">
          <p>Fatigue Score</p>
          <strong>{assessment?.fatigue ?? "N/A"} / 10</strong>
        </div>

        <div className="card">
          <p>Skill Gap</p>
          <strong>{assessment?.skill_gap ?? "N/A"} / 100</strong>
        </div>

        <div className="card">
          <p>Recovery Status</p>
          <strong>
            {assessment?.readiness >= 70
              ? "Good"
              : "Needs Attention"}
          </strong>
        </div>
      </div>

      {/* ===== COACH NOTES ===== */}
      {assessment?.coach_notes && (
        <div className="card" style={{ marginTop: "20px" }}>
          <h3>Coach Notes</h3>
          <p>{assessment.coach_notes}</p>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}`)}>
          Back to Profile
        </button>

        <button
          className="primary"
          onClick={() => navigate(`/players/${id}/update-assessment`)}
        >
          Update Assessment
        </button>
      </div>
    </div>
  );
};

export default PlayerReadiness;

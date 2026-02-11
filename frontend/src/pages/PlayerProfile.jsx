






/*import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerProfile.css";

const PlayerProfile = () => {
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
      } catch (err) {
        console.error(err);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Loading player profile...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="player-profile-container">
      <button className="back-btn" onClick={() => navigate("/players")}>
        ← Back
      </button>

      <div className="profile-header">
        <img
          src={player.profile_image || "https://via.placeholder.com/120"}
          alt={player.name}
          className="profile-image"
        />
        <div>
          <h2>{player.name}</h2>
          <p>
            {player.position} • {player.age} years old
          </p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-card">
          <h3>Personal & Football Details</h3>
          <p><strong>Height:</strong> {player.height || "N/A"} cm</p>
          <p><strong>Weight:</strong> {player.weight || "N/A"} kg</p>
          <p><strong>Preferred Foot:</strong> {player.preferred_foot || "N/A"}</p>
          <p><strong>Current Team:</strong> {player.current_team || "N/A"}</p>
        </div>

        
      </div>

      
      <div style={{ marginTop: "24px" }}>
        <button
          className="readiness-btn"
          onClick={() => navigate(`/players/${id}/readiness`)}
        >
          Player Readiness & Fatigue
        </button>
      </div>
    </div>
  );
};

export default PlayerProfile;*/



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./playerProfile.css";

const PlayerProfile = () => {
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
      } catch (err) {
        console.error(err);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <p>Loading player profile...</p>;
  if (!player) return <p>Player not found</p>;

  return (
    <div className="player-profile-container">
      <button className="back-btn" onClick={() => navigate("/players")}>
        ← Back
      </button>

      <div className="profile-header">
        <img
          src={player.profile_image || "https://via.placeholder.com/120"}
          alt={player.name}
          className="profile-image"
        />
        <div>
          <h2>{player.name}</h2>
          <p>
            {player.position} • {player.age} years old
          </p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-card">
          <h3>Personal & Football Details</h3>
          <p><strong>Email:</strong> {player.email || "N/A"}</p>
          <p><strong>Height:</strong> {player.height || "N/A"} cm</p>
          <p><strong>Weight:</strong> {player.weight || "N/A"} kg</p>
          <p><strong>Preferred Foot:</strong> {player.preferred_foot || "N/A"}</p>
          <p><strong>Current Team:</strong> {player.current_team || "N/A"}</p>
        </div>
      </div>

      
      <div style={{ marginTop: "24px" }}>
        <button
          className="readiness-btn"
          onClick={() => navigate(`/players/${id}/readiness`)}
        >
          Player Readiness & Fatigue
        </button>
      </div>
    </div>
  );
};

export default PlayerProfile;

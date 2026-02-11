/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/players");
      const data = await res.json();
      setPlayers(data);
    } catch (error) {
      console.error("Error fetching players", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p style={{ padding: 20 }}>Loading players...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Players</h2>

      {players.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>No players found</p>

          <button onClick={() => navigate("/create-player")} style={btnStyle}>
            Create Player Profile
          </button>
        </div>
      ) : (
        <>
          <div style={gridStyle}>
            {players.map((player) => (
              <div key={player.id} style={cardStyle}>
                <h4>{player.name}</h4>
                <p>{player.position}</p>
                <p>Age: {player.age}</p>
                <p>Readiness: {player.readiness_score}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() => navigate("/create-player")}
              style={btnStyle}
            >
              Create Player Profile
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "15px",
  marginTop: "20px",
};

const cardStyle = {
  background: "#fff",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const btnStyle = {
  padding: "10px 18px",
  background: "#6366f1",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Players;*/



/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation(); // <-- detect navigation
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/players");
      if (!res.ok) throw new Error("Failed to fetch players");
      const data = await res.json();
      setPlayers(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load players");
    }
  };

  // Fetch every time the page is visited
  useEffect(() => {
    fetchPlayers();
  }, [location.key]); // <-- run when location changes

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {players.length === 0 ? (
        <p>No players found.</p>
      ) : (
        <div className="players-grid">
          {players.map((player) => (
            <div
              key={player.id}
              className="player-card"
              onClick={() => navigate(`/players/${player.id}`)}
            >
              <img
                src={
                  player.profileImage
                    ? `http://localhost:5000/uploads/${player.profileImage}`
                    : "https://via.placeholder.com/100"
                }
                alt={player.name}
                className="player-image"
              />
              <div className="player-info">
                <h3>{player.name}</h3>
                <p>Position: {player.position}</p>
                <p>Age: {player.age}</p>
                <p>Team: {player.current_team}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className="create-player-btn"
        onClick={() => navigate("/create-player")}
      >
        Create Player Profile
      </button>
    </div>
  );
};

export default Players;*/






/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      // ✅ Handle both array and { players: [] } response
      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p._id || p.id,
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        profileImage: p.profileImage ?? p.image ?? null,
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on first load
  useEffect(() => {
    fetchPlayers();
  }, []);

  // Re-fetch after returning from Create Player page
  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}

      {!loading && error && <p className="error-text">{error}</p>}

      {!loading && !error && players.length === 0 && (
        <p>No players found.</p>
      )}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div
              key={player.id}
              className="player-card"
              onClick={() => navigate(`/players/${player.id}`)}
            >
              <img
                src={
                  player.profileImage
                    ? `http://localhost:5000/uploads/${player.profileImage}`
                    : "https://via.placeholder.com/120"
                }
                alt={player.name}
                className="player-image"
              />

              <div className="player-info">
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className="create-player-btn"
        onClick={() => navigate("/create-player")}
      >
        Create Player Profile
      </button>
    </div>
  );
};

export default Players;*/

/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p._id || p.id,
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        profileImage: p.profile_image || p.profileImage || p.image || null,
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  // ✅ Delete player
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/players/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete player");

      alert("Player deleted successfully");
      fetchPlayers(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete player");
    }
  };

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}

      {!loading && error && <p className="error-text">{error}</p>}

      {!loading && !error && players.length === 0 && <p>No players found.</p>}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <img
                src={
                  player.profileImage
                    ? player.profileImage.startsWith("http")
                      ? player.profileImage
                      : `http://localhost:5000/uploads/${player.profileImage}`
                    : "https://via.placeholder.com/120"
                }
                alt={player.name}
                className="player-image"
                onClick={() => navigate(`/players/${player.id}`)}
              />

              <div className="player-info" onClick={() => navigate(`/players/${player.id}`)}>
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(player.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="create-player-btn"
        onClick={() => navigate("/create-player")}
      >
        Create Player Profile
      </button>
    </div>
  );
};

export default Players;*/







/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p.id, // PostgreSQL uses id
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        // ✅ Use the correct column for image
        profileImage: p.profile_image || null,
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  // Delete player
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/players/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete player");

      alert("Player deleted successfully");
      fetchPlayers(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete player");
    }
  };

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}

      {!loading && error && <p className="error-text">{error}</p>}

      {!loading && !error && players.length === 0 && <p>No players found.</p>}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <img
                src={
                  player.profileImage
                    ? `http://localhost:5000/uploads/${player.profileImage}`
                    : "https://via.placeholder.com/120"
                }
                alt={player.name}
                className="player-image"
                onClick={() => navigate(`/players/${player.id}`)}
              />

              <div
                className="player-info"
                onClick={() => navigate(`/players/${player.id}`)}
              >
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(player.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="create-player-btn"
        onClick={() => navigate("/create-player")}
      >
        Create Player Profile
      </button>
    </div>
  );
};

export default Players;*/





/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");
      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p.id, // PostgreSQL uses id
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        // ✅ Always use a placeholder if no image exists
        profileImage: p.profile_image || "https://via.placeholder.com/120",
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/players/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete player");

      alert("Player deleted successfully");
      fetchPlayers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete player");
    }
  };

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}
      {!loading && error && <p className="error-text">{error}</p>}
      {!loading && !error && players.length === 0 && <p>No players found.</p>}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <img
                src={player.profileImage}
                alt={player.name}
                className="player-image"
                onClick={() => navigate(`/players/${player.id}`)}
              />

              <div
                className="player-info"
                onClick={() => navigate(`/players/${player.id}`)}
              >
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(player.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="button-row">
        <button onClick={() => navigate(-1)}>Back</button>
        <button
          className="create-player-btn"
          onClick={() => navigate("/create-player")}
        >
          Create Player Profile
        </button>
      </div>
    </div>
  );
};

export default Players;*/






/*import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");
      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p.id,
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        profileImage: p.profile_image || "https://via.placeholder.com/120",
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/players/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete player");

      alert("Player deleted successfully");
      fetchPlayers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete player");
    }
  };

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}
      {!loading && error && <p className="error-text">{error}</p>}
      {!loading && !error && players.length === 0 && <p>No players found.</p>}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <img
                src={player.profileImage}
                alt={player.name}
                className="player-image"
                onClick={() => navigate(`/players/${player.id}`)}
              />

              <div
                className="player-info"
                onClick={() => navigate(`/players/${player.id}`)}
              >
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(player.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="button-row">
        <button onClick={() => navigate(-1)}>Back</button>
        <button
          className="create-player-btn"
          onClick={() => navigate("/create-player")}
        >
          Create Player Profile
        </button>
      </div>
    </div>
  );
};

export default Players;*/







import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/styles/players.css";

const Players = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/players");
      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      const playerArray = Array.isArray(data)
        ? data
        : Array.isArray(data.players)
        ? data.players
        : [];

      const mappedPlayers = playerArray.map((p) => ({
        id: p.id,
        name: p.name ?? "N/A",
        position: p.position ?? "N/A",
        age: p.age ?? "N/A",
        current_team: p.current_team ?? "N/A",
        profileImage: p.profile_image || "https://via.placeholder.com/120",
      }));

      setPlayers(mappedPlayers);
    } catch (err) {
      console.error(err);
      setError("Failed to load players");
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchPlayers();
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const handleDelete = async (id, e) => {
    e.stopPropagation(); // ✅ prevent navigation

    const confirm = window.confirm(
      "Are you sure you want to delete this player?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/players/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete player");

      alert("Player deleted successfully");
      fetchPlayers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete player");
    }
  };

  return (
    <div className="players-container">
      <h2>Players List</h2>

      {loading && <p>Loading players...</p>}
      {!loading && error && <p className="error-text">{error}</p>}
      {!loading && !error && players.length === 0 && <p>No players found.</p>}

      {!loading && !error && players.length > 0 && (
        <div className="players-grid">
          {players.map((player) => (
            <div
              key={player.id}
              className="player-card"
              onClick={() => navigate(`/players/${player.id}`)} // ✅ profile navigation
            >
              <img
                src={player.profileImage}
                alt={player.name}
                className="player-image"
              />

              <div className="player-info">
                <h3>{player.name}</h3>
                <p>{player.position}</p>
                <p>{player.age} years old</p>
                <p>{player.current_team}</p>
              </div>

              <button
                className="delete-btn"
                onClick={(e) => handleDelete(player.id, e)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="button-row">
        <button onClick={() => navigate(-1)}>Back</button>
        <button
          className="create-player-btn"
          onClick={() => navigate("/create-player")}
        >
          Create Player Profile
        </button>
      </div>
    </div>
  );
};

export default Players;








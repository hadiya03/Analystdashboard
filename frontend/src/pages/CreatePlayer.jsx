











/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- added

const CreatePlayer = () => {
  const navigate = useNavigate(); // <-- added

  const [player, setPlayer] = useState({
    profileImage: null,
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
    readinessScore: "",
    fatigueScore: "",
    riskIndicators: [],
    readinessHistory: [{ date: "", score: "" }],
  });

  const riskOptions = [
    "Injury Prone",
    "Overworked",
    "Low Confidence",
    "Recent Injury",
    "Tired/Fatigued",
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPlayer({
      ...player,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleRiskChange = (risk) => {
    setPlayer((prev) => ({
      ...prev,
      riskIndicators: prev.riskIndicators.includes(risk)
        ? prev.riskIndicators.filter((r) => r !== risk)
        : [...prev.riskIndicators, risk],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: player.name,
      position: player.position,
      age: player.age ? Number(player.age) : null,
      weight: player.weight ? Number(player.weight) : null,
      height: player.height ? Number(player.height) : null,
      preferred_foot: player.preferredFoot,
      current_team: player.currentTeam,
      readiness_score: player.readinessScore
        ? Number(player.readinessScore)
        : null,
      fatigue_score: player.fatigueScore
        ? Number(player.fatigueScore)
        : null,
      risk_indicators:
        player.riskIndicators.length > 0
          ? player.riskIndicators
          : null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Player created successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <div className="section-title">Player Information</div>

      <div className="form-row">
        <div>
          <label>Profile Image</label>
          <input
            type="file"
            onChange={(e) =>
              setPlayer({ ...player, profileImage: e.target.files[0] })
            }
          />
        </div>

        <div>
          <label>Name</label>
          <input name="name" value={player.name} onChange={handleChange} />
        </div>

        <div>
          <label>Position</label>
          <input
            name="position"
            value={player.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={player.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Physical Details</div>

      <div className="form-row">
        <div>
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={player.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            name="height"
            type="number"
            value={player.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Foot</label>
          <input
            name="preferredFoot"
            value={player.preferredFoot}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Team</label>
          <input
            name="currentTeam"
            value={player.currentTeam}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Performance & Risk</div>

      <div className="form-row">
        <div>
          <label>Readiness Score</label>
          <input
            name="readinessScore"
            type="number"
            value={player.readinessScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fatigue Score</label>
          <input
            name="fatigueScore"
            type="number"
            value={player.fatigueScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Risk Indicators</label>
          <div className="flex-row">
            {riskOptions.map((risk) => (
              <label key={risk}>
                <input
                  type="checkbox"
                  checked={player.riskIndicators.includes(risk)}
                  onChange={() => handleRiskChange(risk)}
                />
                {risk}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => navigate("/players")}>
          Back
        </button>
        <button type="submit">Create Player</button>
      </div>
    </form>
  );
};

export default CreatePlayer;*/







/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
    readinessScore: "",
    fatigueScore: "",
    riskIndicators: [],
  });

  const riskOptions = [
    "Injury Prone",
    "Overworked",
    "Low Confidence",
    "Recent Injury",
    "Tired/Fatigued",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const handleRiskChange = (risk) => {
    setPlayer((prev) => ({
      ...prev,
      riskIndicators: prev.riskIndicators.includes(risk)
        ? prev.riskIndicators.filter((r) => r !== risk)
        : [...prev.riskIndicators, risk],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ EXACTLY matches PostgreSQL table columns
    const payload = {
      name: player.name,
      position: player.position,
      age: player.age ? Number(player.age) : null,
      weight: player.weight ? Number(player.weight) : null,
      height: player.height ? Number(player.height) : null,
      preferred_foot: player.preferredFoot || null,
      current_team: player.currentTeam || null,
      readiness_score: player.readinessScore
        ? Number(player.readinessScore)
        : null,
      fatigue_score: player.fatigueScore
        ? Number(player.fatigueScore)
        : null,
      risk_indicators: player.riskIndicators, // JSONB
      readiness_history: [],                 // JSONB REQUIRED
      profile_image: null                    // REQUIRED COLUMN
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create player");
      }

      alert("Player created successfully");

      // ✅ Forces Players page to re-fetch
      navigate("/players", { state: { refresh: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <h2>Create Player</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="position" placeholder="Position" onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} />
      <input name="weight" type="number" placeholder="Weight" onChange={handleChange} />
      <input name="height" type="number" placeholder="Height" onChange={handleChange} />
      <input name="preferredFoot" placeholder="Preferred Foot" onChange={handleChange} />
      <input name="currentTeam" placeholder="Current Team" onChange={handleChange} />
      <input name="readinessScore" type="number" placeholder="Readiness Score" onChange={handleChange} />
      <input name="fatigueScore" type="number" placeholder="Fatigue Score" onChange={handleChange} />

      <div>
        {riskOptions.map((risk) => (
          <label key={risk}>
            <input
              type="checkbox"
              onChange={() => handleRiskChange(risk)}
            />
            {risk}
          </label>
        ))}
      </div>

      <button type="submit">Create Player</button>
    </form>
  );
};

export default CreatePlayer;*/



/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    profileImage: null,
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
    readinessScore: "",
    fatigueScore: "",
    riskIndicators: [],
    readinessHistory: [{ date: "", score: "" }],
  });

  const riskOptions = [
    "Injury Prone",
    "Overworked",
    "Low Confidence",
    "Recent Injury",
    "Tired/Fatigued",
  ];

  // Handles input changes (text & numbers)
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // Handles risk checkbox toggling
  const handleRiskChange = (risk) => {
    setPlayer((prev) => ({
      ...prev,
      riskIndicators: prev.riskIndicators.includes(risk)
        ? prev.riskIndicators.filter((r) => r !== risk)
        : [...prev.riskIndicators, risk],
    }));
  };

  // Submit player to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: player.name,
      position: player.position,
      age: player.age || null,
      weight: player.weight || null,
      height: player.height || null,
      preferred_foot: player.preferredFoot || null,
      current_team: player.currentTeam || null,
      readiness_score: player.readinessScore || null,
      fatigue_score: player.fatigueScore || null,
      risk_indicators:
        player.riskIndicators.length > 0 ? player.riskIndicators : null,
      readiness_history: player.readinessHistory || [],
      profile_image: player.profileImage || null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create player");

      alert("Player created successfully");
      navigate("/players", { state: { refresh: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <div className="section-title">Player Information</div>

      <div className="form-row">
        <div>
          <label>Profile Image</label>
          <input
            type="file"
            onChange={(e) =>
              setPlayer({ ...player, profileImage: e.target.files[0] })
            }
          />
        </div>

        <div>
          <label>Name</label>
          <input
            name="name"
            value={player.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Position</label>
          <input
            name="position"
            value={player.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={player.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Physical Details</div>

      <div className="form-row">
        <div>
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={player.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            name="height"
            type="number"
            value={player.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Foot</label>
          <input
            name="preferredFoot"
            value={player.preferredFoot}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Team</label>
          <input
            name="currentTeam"
            value={player.currentTeam}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Performance & Risk</div>

      <div className="form-row">
        <div>
          <label>Readiness Score</label>
          <input
            name="readinessScore"
            type="number"
            value={player.readinessScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fatigue Score</label>
          <input
            name="fatigueScore"
            type="number"
            value={player.fatigueScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Risk Indicators</label>
          <div className="flex-row">
            {riskOptions.map((risk) => (
              <label key={risk}>
                <input
                  type="checkbox"
                  checked={player.riskIndicators.includes(risk)}
                  onChange={() => handleRiskChange(risk)}
                />
                {risk}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => navigate("/players")}>
          Back
        </button>
        <button type="submit">Create Player</button>
      </div>
    </form>
  );
};

export default CreatePlayer;*/





/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    profileImage: "", // <-- now use a URL string instead of a file
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
    readinessScore: "",
    fatigueScore: "",
    riskIndicators: [],
    readinessHistory: [{ date: "", score: "" }],
  });

  const riskOptions = [
    "Injury Prone",
    "Overworked",
    "Low Confidence",
    "Recent Injury",
    "Tired/Fatigued",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // Handle risk checkboxes
  const handleRiskChange = (risk) => {
    setPlayer((prev) => ({
      ...prev,
      riskIndicators: prev.riskIndicators.includes(risk)
        ? prev.riskIndicators.filter((r) => r !== risk)
        : [...prev.riskIndicators, risk],
    }));
  };

  // Submit player
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: player.name,
      position: player.position,
      age: player.age || null,
      weight: player.weight || null,
      height: player.height || null,
      preferred_foot: player.preferredFoot || null,
      current_team: player.currentTeam || null,
      readiness_score: player.readinessScore || null,
      fatigue_score: player.fatigueScore || null,
      risk_indicators:
        player.riskIndicators.length > 0 ? player.riskIndicators : null,
      readiness_history: player.readinessHistory || [],
      // store a URL string for profile image
      profile_image: player.profileImage || "https://via.placeholder.com/120",
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create player");

      alert("Player created successfully");
      navigate("/players", { state: { refresh: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <div className="section-title">Player Information</div>

      <div className="form-row">
        <div>
          <label>Profile Image URL</label>
          <input
            type="text"
            name="profileImage"
            placeholder="Enter image URL"
            value={player.profileImage}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Name</label>
          <input name="name" value={player.name} onChange={handleChange} />
        </div>

        <div>
          <label>Position</label>
          <input
            name="position"
            value={player.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={player.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Physical Details</div>

      <div className="form-row">
        <div>
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={player.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            name="height"
            type="number"
            value={player.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Foot</label>
          <input
            name="preferredFoot"
            value={player.preferredFoot}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Team</label>
          <input
            name="currentTeam"
            value={player.currentTeam}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Performance & Risk</div>

      <div className="form-row">
        <div>
          <label>Readiness Score</label>
          <input
            name="readinessScore"
            type="number"
            value={player.readinessScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fatigue Score</label>
          <input
            name="fatigueScore"
            type="number"
            value={player.fatigueScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Risk Indicators</label>
          <div className="flex-row">
            {riskOptions.map((risk) => (
              <label key={risk}>
                <input
                  type="checkbox"
                  checked={player.riskIndicators.includes(risk)}
                  onChange={() => handleRiskChange(risk)}
                />
                {risk}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => navigate("/players")}>
          Back
        </button>
        <button type="submit">Create Player</button>
      </div>
    </form>
  );
};

export default CreatePlayer;*/










/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    profileImage: "",
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
    readinessScore: "",
    fatigueScore: "",
    riskIndicators: [],
    readinessHistory: [{ date: "", score: "" }],
  });

  const riskOptions = [
    "Injury Prone",
    "Overworked",
    "Low Confidence",
    "Recent Injury",
    "Tired/Fatigued",
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // ✅ ONLY NEW FUNCTION (LOCAL FILE → BASE64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPlayer((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRiskChange = (risk) => {
    setPlayer((prev) => ({
      ...prev,
      riskIndicators: prev.riskIndicators.includes(risk)
        ? prev.riskIndicators.filter((r) => r !== risk)
        : [...prev.riskIndicators, risk],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: player.name,
      position: player.position,
      age: player.age || null,
      weight: player.weight || null,
      height: player.height || null,
      preferred_foot: player.preferredFoot || null,
      current_team: player.currentTeam || null,
      readiness_score: player.readinessScore || null,
      fatigue_score: player.fatigueScore || null,
      risk_indicators:
        player.riskIndicators.length > 0 ? player.riskIndicators : null,
      readiness_history: player.readinessHistory || [],
      profile_image: player.profileImage || null, // ✅ BASE64
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create player");

      alert("Player created successfully");
      navigate("/players", { state: { refresh: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <div className="section-title">Player Information</div>

      <div className="form-row">
        <div>
          <label>Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div>
          <label>Name</label>
          <input name="name" value={player.name} onChange={handleChange} />
        </div>

        <div>
          <label>Position</label>
          <input
            name="position"
            value={player.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={player.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Physical Details</div>

      <div className="form-row">
        <div>
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={player.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            name="height"
            type="number"
            value={player.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Foot</label>
          <input
            name="preferredFoot"
            value={player.preferredFoot}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Team</label>
          <input
            name="currentTeam"
            value={player.currentTeam}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Performance & Risk</div>

      <div className="form-row">
        <div>
          <label>Readiness Score</label>
          <input
            name="readinessScore"
            type="number"
            value={player.readinessScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fatigue Score</label>
          <input
            name="fatigueScore"
            type="number"
            value={player.fatigueScore}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Risk Indicators</label>
          <div className="flex-row">
            {riskOptions.map((risk) => (
              <label key={risk}>
                <input
                  type="checkbox"
                  checked={player.riskIndicators.includes(risk)}
                  onChange={() => handleRiskChange(risk)}
                />
                {risk}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => navigate("/players")}>
          Back
        </button>
        <button type="submit">Create Player</button>
      </div>
    </form>
  );
};

export default CreatePlayer;*/







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    playerId: "",
    email: "",
    profileImage: "",
    name: "",
    position: "",
    age: "",
    weight: "",
    height: "",
    preferredFoot: "",
    currentTeam: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPlayer((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPlayer((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      player_id: player.playerId,
      email: player.email,
      name: player.name,
      position: player.position,
      age: player.age || null,
      weight: player.weight || null,
      height: player.height || null,
      preferred_foot: player.preferredFoot || null,
      current_team: player.currentTeam || null,
      profile_image: player.profileImage || null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create player");

      alert("Player created successfully");
      navigate("/players", { state: { refresh: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to create player");
    }
  };

  return (
    <form className="create-player-container" onSubmit={handleSubmit}>
      <div className="section-title">Player Information</div>

      <div className="form-row">
        <div>
          <label>Player ID</label>
          <input
            name="playerId"
            value={player.playerId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={player.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div>
          <label>Name</label>
          <input name="name" value={player.name} onChange={handleChange} />
        </div>

        <div>
          <label>Position</label>
          <input
            name="position"
            value={player.position}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={player.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="section-title">Physical Details</div>

      <div className="form-row">
        <div>
          <label>Weight (kg)</label>
          <input
            name="weight"
            type="number"
            value={player.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Height (cm)</label>
          <input
            name="height"
            type="number"
            value={player.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Preferred Foot</label>
          <input
            name="preferredFoot"
            value={player.preferredFoot}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Team</label>
          <input
            name="currentTeam"
            value={player.currentTeam}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={() => navigate("/players")}>
          Back
        </button>
        <button type="submit">Create Player</button>
      </div>
    </form>
  );
};

export default CreatePlayer;

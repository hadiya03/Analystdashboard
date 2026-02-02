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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = () => {
    const fatigue =
      (form.trainingLoad * 0.4) +
      (form.soreness * 0.2) +
      (form.stress * 0.2) +
      (form.pain * 0.2);

    const readiness =
      (form.sleepHours * 10) - fatigue;

    const targetSkill = 100;
    const skillGap = targetSkill - form.skillScore;

    setResult({
      fatigue: fatigue.toFixed(1),
      readiness: readiness.toFixed(1),
      skillGap: skillGap
    });
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate Assessment
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
          </div>

          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default UpdateAssessment;*/









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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = () => {
    const fatigue =
      (form.trainingLoad * 0.4) +
      (form.soreness * 0.2) +
      (form.stress * 0.2) +
      (form.pain * 0.2);

    const readiness =
      (form.sleepHours * 10) - fatigue;

    const targetSkill = 100;
    const skillGap = targetSkill - form.skillScore;

    setResult({
      fatigue: fatigue.toFixed(1),
      readiness: readiness.toFixed(1),
      skillGap: skillGap
    });
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate Assessment
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
          </div>

          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default UpdateAssessment;*/





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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = () => {
    const fatigue =
      (form.trainingLoad * 0.4) +
      (form.soreness * 0.2) +
      (form.stress * 0.2) +
      (form.pain * 0.2);

    const readiness =
      (form.sleepHours * 10) - fatigue;

    const skillGap = 100 - form.skillScore;

    const updatedResult = {
      fatigue: parseFloat(fatigue.toFixed(1)),
      readiness: parseFloat(readiness.toFixed(1)),
      skillGap: parseFloat(skillGap.toFixed(1))
    };

    setResult(updatedResult);

    // Save to localStorage so PlayerReadiness can read it
    localStorage.setItem(`player-${id}-assessment`, JSON.stringify(updatedResult));

    // Navigate back to readiness page
    navigate(`/players/${id}/readiness`);
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
          </div>

          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}/readiness`)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateAssessment;*/


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

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = async () => {
    const fatigue =
      (form.trainingLoad * 0.4) +
      (form.soreness * 0.2) +
      (form.stress * 0.2) +
      (form.pain * 0.2);

    const readiness = (form.sleepHours * 10) - fatigue;

    const skillGap = 100 - form.skillScore;

    const updatedResult = {
      fatigue: parseFloat(fatigue.toFixed(1)),
      readiness: parseFloat(readiness.toFixed(1)),
      skillGap: parseFloat(skillGap.toFixed(1))
    };

    setResult(updatedResult);

    // ✅ Save assessment to backend database
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
          skillGap: updatedResult.skillGap
        })
      });

      if (!res.ok) throw new Error("Failed to save assessment");

      // Navigate back to readiness page after saving
      navigate(`/players/${id}/readiness`);
    } catch (error) {
      console.error("Error saving assessment:", error);
      alert("Failed to save assessment. Check backend connection.");
    }
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours (1-10)
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
          </div>

          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

      <div className="actions">
        <button onClick={() => navigate(`/players/${id}/readiness`)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateAssessment;*/








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
    skillScore: "",
    coachNotes: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "coachNotes" ? value : Number(value)
    });
  };

  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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
          coachNotes: form.coachNotes,
          readiness: updatedResult.readiness,
          fatigue: updatedResult.fatigue,
          skillGap: updatedResult.skillGap
        })
      });

      if (!res.ok) throw new Error("Failed to save assessment");

      navigate(`/players/${id}/readiness`);
    } catch (error) {
      console.error("Error saving assessment:", error);
      alert("Failed to save assessment. Check backend connection.");
    }
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      
      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours (1–10)
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

     
      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
          </div>

          <div className="card">
            <h3>{result.skillGap}</h3>
            <p>Skill Gap</p>
          </div>
        </div>
      )}

     
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Coach Notes</h3>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
          Add personalized feedback or actions.
        </p>

        <textarea
          name="coachNotes"
          rows="4"
          placeholder="Enter coach observations, recovery advice, or next steps..."
          value={form.coachNotes}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />
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

  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  
  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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
          skillGap: updatedResult.skillGap
        })
      });

      if (!res.ok) throw new Error("Failed to save assessment");

      navigate(`/players/${id}/readiness`);
    } catch (error) {
      console.error("Assessment save error:", error);
      alert("Failed to save assessment");
    }
  };

  
  const sendCoachNotes = async () => {
    if (!coachNotes.trim()) {
      alert("Please enter coach notes before sending");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/assessments/${id}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          player_id: id,
          coachNotes
        })
      });

      if (!res.ok) throw new Error("Failed to send coach notes");

      alert("Coach notes sent successfully");
      setCoachNotes("");
    } catch (error) {
      console.error("Coach notes error:", error);
      alert("Failed to send coach notes");
    }
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      
      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours (1–10)
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      
      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
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
          placeholder="Enter observations, recovery guidance, or instructions..."
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button className="primary" onClick={sendCoachNotes}>
          Send
        </button>
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

  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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

          // ✅ FIXED FIELD NAMES (this is the key change)
          readiness_score: updatedResult.readiness,
          fatigue_score: updatedResult.fatigue,
          skill_gap: updatedResult.skillGap
        })
      });

      if (!res.ok) throw new Error("Failed to save assessment");

      navigate(`/players/${id}/readiness`);
    } catch (error) {
      console.error("Assessment save error:", error);
      alert("Failed to save assessment");
    }
  };

  const sendCoachNotes = async () => {
    if (!coachNotes.trim()) {
      alert("Please enter coach notes before sending");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/assessments/${id}/notes`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            player_id: id,
            coachNotes
          })
        }
      );

      if (!res.ok) throw new Error("Failed to send coach notes");

      alert("Coach notes sent successfully");
      setCoachNotes("");
    } catch (error) {
      console.error("Coach notes error:", error);
      alert("Failed to send coach notes");
    }
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>
          Training Load (1–10)
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours (1–10)
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness (1–10)
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level (1–10)
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain (1–10)
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score (0–100)
          <input name="skillScore" type="number" onChange={handleChange} />
        </label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card">
            <h3>{result.readiness}</h3>
            <p>Readiness Score</p>
          </div>

          <div className="card">
            <h3>{result.fatigue}</h3>
            <p>Fatigue Score</p>
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
          placeholder="Enter observations, recovery guidance, or instructions..."
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button className="primary" onClick={sendCoachNotes}>
          Send
        </button>
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

  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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

          // ✅ EXACT backend field names
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
        <label>Training Load <input name="trainingLoad" type="number" onChange={handleChange} /></label>
        <label>Sleep Hours <input name="sleepHours" type="number" onChange={handleChange} /></label>
        <label>Muscle Soreness <input name="soreness" type="number" onChange={handleChange} /></label>
        <label>Stress Level <input name="stress" type="number" onChange={handleChange} /></label>
        <label>Injury Pain <input name="pain" type="number" onChange={handleChange} /></label>
        <label>Skill Score <input name="skillScore" type="number" onChange={handleChange} /></label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card"><h3>{result.readiness}</h3><p>Readiness</p></div>
          <div className="card"><h3>{result.fatigue}</h3><p>Fatigue</p></div>
          <div className="card"><h3>{result.skillGap}</h3><p>Skill Gap</p></div>
        </div>
      )}

      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Coach Notes</h3>
        <textarea
          rows="4"
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
        />
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

  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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

  // ✅ MISSING FUNCTION — FIXED
  const sendCoachNotes = () => {
    alert("Notes will be saved when you click Calculate & Save");
  };

  return (
    <div className="assessment-container">
      <h2>Update Player Assessment</h2>

      <div className="assessment-form">
        <label>Training Load <input name="trainingLoad" type="number" onChange={handleChange} /></label>
        <label>Sleep Hours <input name="sleepHours" type="number" onChange={handleChange} /></label>
        <label>Muscle Soreness <input name="soreness" type="number" onChange={handleChange} /></label>
        <label>Stress Level <input name="stress" type="number" onChange={handleChange} /></label>
        <label>Injury Pain <input name="pain" type="number" onChange={handleChange} /></label>
        <label>Skill Score <input name="skillScore" type="number" onChange={handleChange} /></label>

        <button className="primary" onClick={calculateAssessment}>
          Calculate & Save
        </button>
      </div>

      {result && (
        <div className="result-cards">
          <div className="card"><h3>{result.readiness}</h3><p>Readiness</p></div>
          <div className="card"><h3>{result.fatigue}</h3><p>Fatigue</p></div>
          <div className="card"><h3>{result.skillGap}</h3><p>Skill Gap</p></div>
        </div>
      )}

      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Coach Notes</h3>
        <textarea
          rows="4"
          value={coachNotes}
          onChange={(e) => setCoachNotes(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button className="primary" onClick={sendCoachNotes}>
          Send
        </button>
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

  const [coachNotes, setCoachNotes] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const calculateAssessment = async () => {
    const fatigue =
      form.trainingLoad * 0.4 +
      form.soreness * 0.2 +
      form.stress * 0.2 +
      form.pain * 0.2;

    const readiness = Math.max(
      0,
      Math.min(100, form.sleepHours * 10 - fatigue)
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
          <input name="trainingLoad" type="number" onChange={handleChange} />
        </label>

        <label>
          Sleep Hours
          <input name="sleepHours" type="number" onChange={handleChange} />
        </label>

        <label>
          Muscle Soreness
          <input name="soreness" type="number" onChange={handleChange} />
        </label>

        <label>
          Stress Level
          <input name="stress" type="number" onChange={handleChange} />
        </label>

        <label>
          Injury Pain
          <input name="pain" type="number" onChange={handleChange} />
        </label>

        <label>
          Skill Score
          <input name="skillScore" type="number" onChange={handleChange} />
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

        <button className="primary">
          Send
        </button>
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
      Math.min(100, form.sleepHours * 10 - fatigue)
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







import React, { useState } from "react";
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

    /* ===== CORRECTED EQUATIONS ONLY ===== */

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

    /* ===== END EQUATION FIX ===== */

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

export default UpdateAssessment;

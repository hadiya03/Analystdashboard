/*const pool = require("../db");

// Save a new assessment
const createAssessment = async (req, res) => {
  const { playerId } = req.params;
  const {
    trainingLoad,
    sleepHours,
    soreness,
    stress,
    pain,
    skillScore,
    readiness,
    fatigue,
    skillGap
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO player_assessments
        (player_id, training_load, sleep_hours, soreness, stress, pain, skill_score, readiness_score, fatigue_score, skill_gap)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING *`,
      [
        playerId,
        trainingLoad,
        sleepHours,
        soreness,
        stress,
        pain,
        skillScore,
        readiness,
        fatigue,
        skillGap
      ]
    );

    res.json({ success: true, assessment: result.rows[0] });
  } catch (err) {
    console.error("Error saving assessment:", err);
    res.status(500).json({ success: false, error: "Database error" });
  }
};

// Get the latest assessment for a player
const getLatestAssessment = async (req, res) => {
  const { playerId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM player_assessments
       WHERE player_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [playerId]
    );

    res.json(result.rows[0] || null);
  } catch (err) {
    console.error("Error fetching assessment:", err);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = {
  createAssessment,
  getLatestAssessment
};*/


/*const pool = require("../db");

exports.saveAssessment = async (req, res) => {
  const { id } = req.params;

  const {
    trainingLoad,
    sleepHours,
    soreness,
    stress,
    pain,
    skillScore,
    readiness,
    fatigue,
    skillGap,
    coachNotes
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO player_assessments
       (player_id, training_load, sleep_hours, soreness, stress, pain,
        skill_score, readiness, fatigue, skill_gap, coach_notes)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        id,
        trainingLoad,
        sleepHours,
        soreness,
        stress,
        pain,
        skillScore,
        readiness,
        fatigue,
        skillGap,
        coachNotes
      ]
    );

    res.status(201).json({ message: "Assessment saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save assessment" });
  }
};*/





const pool = require("../db");

exports.saveAssessment = async (req, res) => {
  const { id } = req.params;

  const {
    trainingLoad,
    sleepHours,
    soreness,
    stress,
    pain,
    skillScore,
    readiness,
    fatigue,
    skillGap,
    coachNotes
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO player_assessments
       (player_id, training_load, sleep_hours, soreness, stress, pain,
        skill_score, readiness, fatigue, skill_gap, coach_notes)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        id,
        trainingLoad,
        sleepHours,
        soreness,
        stress,
        pain,
        skillScore,
        readiness,
        fatigue,
        skillGap,
        coachNotes || null
      ]
    );

    res.status(201).json({ message: "Assessment saved" });
  } catch (err) {
    console.error("Save assessment error:", err);
    res.status(500).json({ error: "Failed to save assessment" });
  }
};



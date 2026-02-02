/*const express = require("express");
const router = express.Router();
const { createAssessment, getLatestAssessment } = require("../controllers/assessments");

// POST a new assessment for a player
router.post("/:playerId", createAssessment);

// GET the latest assessment for a player
router.get("/:playerId/latest", getLatestAssessment);

module.exports = router;*/



/*const express = require("express");
const router = express.Router();
const controller = require("../controllers/assessments");

router.post("/:id", controller.saveAssessment);

// ✅ player sees ONLY their own notes
router.get("/:id", async (req, res) => {
  const pool = require("../db");
  const { id } = req.params;

  const result = await pool.query(
    `SELECT readiness, fatigue, skill_gap, coach_notes, created_at
     FROM player_assessments
     WHERE player_id = $1
     ORDER BY created_at DESC
     LIMIT 1`,
    [id]
  );

  res.json(result.rows[0]);
});

module.exports = router;*/




const express = require("express");
const router = express.Router();
const controller = require("../controllers/assessments");
const pool = require("../db");

router.post("/:id", controller.saveAssessment);

// ✅ Player sees ONLY their latest assessment + coach notes
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT readiness, fatigue, skill_gap, coach_notes, created_at
       FROM player_assessments
       WHERE player_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [id]
    );

    // 🔐 SAFE RESPONSE (this fixes your bug)
    if (result.rows.length === 0) {
      return res.json(null);
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Fetch assessment error:", err);
    res.status(500).json({ error: "Failed to fetch assessment" });
  }
});







module.exports = router;

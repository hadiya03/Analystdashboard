
/*const express = require("express");
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


module.exports = router;*/



/*const express = require("express");
const router = express.Router();

// ✅ FIXED controller filename
const controller = require("../controllers/assessments");
const pool = require("../db");

// SAVE assessment
router.post("/:id", controller.saveAssessment);

// SEND reminder email
router.post("/:id/send-reminder", controller.sendReminder);

// GET latest assessment
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT readiness, fatigue, skill_gap, coach_notes, created_at
       FROM player_assessments
       WHERE player_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [Number(id)]
    );

    if (result.rows.length === 0) {
      return res.json(null);
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Fetch assessment error:", err);
    res.status(500).json({ error: "Failed to fetch assessment" });
  }
});

module.exports = router;*/



const express = require("express");
const router = express.Router();

const controller = require("../controllers/assessments");
const pool = require("../db");


// ✅ SAVE assessment (calculates + stores injury risk)
router.post("/:id", controller.saveAssessment);


// ✅ SEND reminder email
router.post("/:id/send-reminder", controller.sendReminder);


// ✅ GET latest assessment (for Player Dashboard display)
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT injury_risk, coach_notes, created_at
       FROM player_assessments
       WHERE player_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [Number(id)]
    );

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


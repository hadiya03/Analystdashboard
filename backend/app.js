/*const express = require("express");
const cors = require("cors");

const playerRoutes = require("./routes/playerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/players", playerRoutes);
app.use(express.json());
app.use("/api", require("./routes/playerRoutes"));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/

/*const express = require("express");
const cors = require("cors");

const playerRoutes = require("./routes/playerRoutes");

const app = express();

app.use(cors());
//app.use(express.json());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// ✅ Mount routes ONCE
app.use("/api", playerRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/




/*const express = require("express");
const cors = require("cors");

const playerRoutes = require("./routes/playerRoutes");
const playerAssessmentsRouter = require("./routes/playerAssessments"); // ✅ Added assessments route
const trainingRoutes = require("./routes/trainingRoutes");

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// ✅ Mount routes
app.use("/api", playerRoutes); // existing player routes
app.use("/api/assessments", playerAssessmentsRouter); // ✅ assessments routes
app.use("/training-sessions", trainingRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/




const express = require("express");
const cors = require("cors");

const playerRoutes = require("./routes/playerRoutes");
const playerAssessmentsRouter = require("./routes/playerAssessments"); // ✅ Added assessments route
const trainingRoutes = require("./routes/trainingRoutes");
const playerAssessmentsRoutes = require("./routes/dashBoard");

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// ✅ Mount routes
app.use("/api", playerRoutes); // existing player routes
app.use("/api/assessments", playerAssessmentsRouter); // ✅ assessments routes
app.use("/api/training-sessions", trainingRoutes); // ✅ corrected route prefix for consistency
app.use("/api/dashboard", require("./routes/dashBoard"));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



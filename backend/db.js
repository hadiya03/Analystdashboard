const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mern_db",
  password: "hadiyamk",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("✅ PostgreSQL connected successfully"))
  .catch((err) => console.error("❌ PostgreSQL connection failed", err));

module.exports = pool


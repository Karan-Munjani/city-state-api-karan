const express = require("express");

// My Routes
const cityRoutes = require("./routes/city");
const countryRoutes = require("./routes/country");
const stateRoutes = require("./routes/state");

const app = express();
const port = process.env.PORT || 8000;

// My Routes in use
app.use("/api", cityRoutes);
app.use("/api", countryRoutes);
app.use("/api", stateRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

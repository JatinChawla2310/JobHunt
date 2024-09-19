const express = require("express");
const cors = require("cors");
const coookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
const userRouter = require("./routes/user.route");
const companyRouter = require("./routes/company.route");
const jobRouter = require("./routes/job.route");
const applicationRouter = require("./routes/application.route");

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 8000;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening at port ${PORT}`);
});

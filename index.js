import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes/index.js";
import { connectToMongo } from "./config/mongoose.js";
import bodyParser from "body-parser";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);


// const port = process.env.PORT || 5173;
const port = 8000;

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log("server is running in port " + port);
  });
} catch (err) {
  console.log("ERROR: " + err);
}

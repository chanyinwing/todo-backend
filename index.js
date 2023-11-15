import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index";
import { connectToMongo } from "./config/mongoose";

const app = express();

//Middleware
app.use(cors());
app.use("/api", routes);

const port = process.env.PORT || 8000;

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log('server is running in port 8000')
  });
} catch (err) {
    console.log('ERROR: '+ err)
}

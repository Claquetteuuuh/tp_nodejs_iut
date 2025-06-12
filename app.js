import express from 'express';
import tour from "./routes/tour.router.js";
import user from "./routes/user.router.js";
import dotenv from "dotenv";
import connectDB from "./libs/mongoConnection.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await connectDB();
    res.send('Hello from the server - MongoDB connected');
  } catch (error) {
    res.status(500).send('Erreur de connexion MongoDB');
  }
});

app.use("/api/v1", tour);
app.use("/api/v1", user);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`App running on port ${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
});
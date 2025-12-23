import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server started on port: http://localhost:5001");
});

// mongodb+srv://premdanasekaran_db_user:S4tqqLQcyIE3Uo1C@cluster0.2u14sxn.mongodb.net/?appName=Cluster0
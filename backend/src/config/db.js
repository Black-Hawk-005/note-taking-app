import mongoose from "mongoose"

export const connectDB = async () => {
  try {
		await mongoose.connect("mongodb+srv://premdanasekaran_db_user:S4tqqLQcyIE3Uo1C@cluster0.2u14sxn.mongodb.net/?appName=Cluster0");
		console.log("MONGODB CONNECTED SUCCESSFULLY");
	} catch (error) {
		console.error("Error connecting to MONGDB", error);
	}
}

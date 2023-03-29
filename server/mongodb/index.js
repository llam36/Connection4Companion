import mongoose from "mongoose";

export async function connectDB() {
    if (mongoose.connections[0].readyState) return;

    await mongoose
        .connect(process.env.MONGO_DB, {
            dbName: process.env.DB_NAME,
        })
        .catch((e) => {
            console.error("Error connecting to database.");
            throw e;
        });
    console.log("Sucessfully connected to the database!");
};

export async function closeDB() {
    await mongoose.connection.close();
    console.log("Connection Closed.");
};

import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";
 
dotenv.config();


const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
    origin: process.env.URL,
    credentials: true
}
app.use(cors(corsOptions));

// yha pr apni api ayengi
app.use("/api/v1/user", userRoute);
console.log("user route" ,"/api/v1/user");
console.log("user route" ,"/api/v1/user");
console.log("user route" ,"/api/v1/user");
console.log("user route" ,"/api/v1/user");
console.log("user route" ,"/api/v1/user");
console.log("user route" ,"/api/v1/user");
app.use("/api/v1/post", postRoute);
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
console.log("post route" ,"/api/v1/post");
app.use("/api/v1/message", messageRoute);
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");
console.log("message route" ,"/api/v1/message");


app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})

// console.log()
server.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});
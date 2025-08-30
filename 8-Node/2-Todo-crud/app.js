// MVC Pattern
// Model ===> Database Data Store Pattern
// View ===> User View
// Controller ===> All Logic

// Rest Api ===> Representational State Transfer
// Graphql Api

import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.js";
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes Middleware
app.use("/api", todoRoutes);

// Method
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(3005);
console.log("Server Started");
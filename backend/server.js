const express = require("express");
const app = express();
const router = require("./routers/auth-router");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(201).send("Welcome To New Server");
});

app.post("/api/register", router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
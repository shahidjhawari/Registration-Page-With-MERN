const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use(express.json());

app.use("/api/register", router);


app.get("/", (req, res) => {
    res.status(200).send("Server Running");
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
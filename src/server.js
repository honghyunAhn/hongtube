import express from "express";

const PORT = 9090;

const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log(`Someone is going to: ${req.url}`);
    next();
}
const handleHome = (req, res) => {
    return res.send("I love middlewares");
}
const handleLogin = (req, res) => {
    return res.send({message:"Login here."});
}

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
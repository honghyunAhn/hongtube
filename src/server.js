import express from "express";
import logger from "morgan";

const PORT = 9090;

const app = express();

const home = (req, res) => {
  return res.send("hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(logger("dev"));
app.get("/", home);
app.get("/login", login);

const handleListening = () => 
    console.log(`✅Server listenting on port http://localhost:${PORT}🚀🚀`);

app.listen(PORT, handleListening);
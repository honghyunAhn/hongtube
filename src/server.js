import express from "express";
import morgan from "morgan";

const PORT = 9090;
const logger = morgan("dev"); 

const app = express();

const home = (req, res) => {
  return res.send("hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);
 
const handleListening = () => 
    console.log(`✅Server listenting on port http://localhost:${PORT}🚀🚀`);

app.listen(PORT, handleListening);
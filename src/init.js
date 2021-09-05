import "./db";
import "./models/Video";
import app from "./server";

const PORT = 9090;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
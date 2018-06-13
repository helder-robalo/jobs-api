import express from "express";
import helmet from "helmet";
import {} from "dotenv/config";

const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(helmet());
app.listen(port);

console.warn(`Access by http://localhost:${port}`);

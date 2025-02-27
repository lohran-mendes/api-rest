import connectDB from "./config/dbConnect.js";
import express from "express";
import routes from "./routes/index.js";

const app = express();
routes(app);

const connection = await connectDB();

connection.on("error", (error) =>
  console.error("Erro na conexão com o Banco de Dados", error)
);
connection.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida!")
);

export default app;

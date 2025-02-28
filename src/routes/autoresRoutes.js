import express from "express";
import AutorController from "../controllers/autorController.js";

const autores = express.Router();

autores.get("/autores", AutorController.listarTodosAutores);
autores.get("/autores/:id", AutorController.listarAutor);
autores.post("/autores", AutorController.cadastrarAutor);
autores.put('/autores/:id', AutorController.atualizarAutor)
autores.delete('/autores/:id', AutorController.apagarAutor)

export default autores;
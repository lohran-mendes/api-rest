import express from "express";
import LivroController from "../controllers/livroController.js";

const livros = express.Router();

livros.get("/livros", LivroController.listarTodosLivros);
livros.get("/livros/:id", LivroController.listarLivro);
livros.post("/livros", LivroController.cadastrarLivro);
livros.put('/livros/:id', LivroController.atualizarLivro)
livros.delete('/livros/:id', LivroController.apagarLivro)

export default livros;
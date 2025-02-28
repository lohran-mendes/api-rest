import { autor } from "../models/Autor.js";

class AutorController {
  static async listarTodosAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (erro) {
      res
        .status(500)
        .json({
          message: `${erro.message}: - Falha na requisição da lista de Autores.`,
        });
    }
  }

  static async listarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Falha na requisição do autor.` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const autorNovo = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "autor criado com sucesso!", autor: autorNovo });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Erro ao cadastrar o autor.` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({
          message: `${erro.message}: - Falha na requisição para atualizar o autor.`,
        });
    }
  }

  static async apagarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor foi deletado com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({
          message: `${erro.message}: - Falha na requisição para apagar autor.`,
        });
    }
  }
}

export default AutorController;

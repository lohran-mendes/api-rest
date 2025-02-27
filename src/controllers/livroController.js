import livro from "../models/Livro.js";

class LivroController {
  static async listarTodosLivros(req, res) {
    try {
      const listarLivros = await livro.find({});
      res.status(200).json(listarLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Falha na requisição da lista de livros.` });
    }
  }

  static async listarLivro(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Falha na requisição do livro.` });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const livroNovo = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", livro: livroNovo });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Erro ao cadastrar o livro.` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado com sucesso!"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Falha na requisição para atualizar o livro.` });
    }
  }

  static async apagarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message:"Livro foi deletado com sucesso!"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message}: - Falha na requisição para apagar livro.` });
    }
  }
}

export default LivroController;

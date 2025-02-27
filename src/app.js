import livro from "./models/Livro.js";
import connectDB from "./config/dbConnect.js";
import express from "express";

const app = express();
app.use(express.json())

const connection = await connectDB()

connection.on("error", (error) => console.error('Erro na conexão com o Banco de Dados', error) )
connection.once("open", () => console.log("Conexão com o banco de dados estabelecida!"))

app.get("/", (req, res) => {
  res.status(200).send("API-REST funcionando!");
});

app.get("/livros", async (req, res) => {
  const livros = await livro.find({})
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const index = searchBook(req.params.id)
  res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
  livros.push(req.body)
  res.status(201).send("Livro criado!");
});

app.put('/livros/:id', (req, res) => {
  const index = searchBook(req.params.id)
  livros[index].titulo = req.body.titulo;
  res.status(200).send('Titulo do livro alterado com sucesso!')
})

app.delete('/livros/:id', (req, res)=>{
const index = searchBook(req.params.id)
livros.splice(index, 1)
res.status(200).send('Livro foi deletado com sucesso!')
})

export default app;

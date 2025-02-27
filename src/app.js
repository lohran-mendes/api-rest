import express from "express";

const app = express();
app.use(express.json())

const livros = [
  {
    id: 1,
    titulo: "naruto",
  },
  {
    id: 2,
    titulo: "Dragon Ball",
  },
  {
    id: 3,
    titulo: "yu-gi-oh!",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("API-REST funcionando!");
});

app.get("/livros", (req, res) => {
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

function searchBook (id) {
 return livros.findIndex(livro => livro.id === Number(id))
}

export default app;

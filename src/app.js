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

app.post("/livros", (req, res) => {
  livros.push(req.body)
  res.status(201).send("Livro criado!");
});

export default app;

import http from "node:http";

const PORT = 3000;

const rotas = {
  '/':'Retorno padrão da rota inicial',
  '/primeira-rota': 'Retorno da primeira rota http',
  '/segunda-rota': 'Retorno da segunda rota http'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plan" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("RODANDO!!!");
});

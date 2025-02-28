# 📚 Book-API -> API de Gerenciamento de Biblioteca

Este repositório contém uma API desenvolvida com o objetivo de praticar os conhecimentos adquiridos em um curso sobre API. O projeto utiliza **Node.js**, **Express** e **MongoDB** para construir um CRUD (Create, Read, Update, Delete) de livros e autores, que pode ser usado em uma biblioteca.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript no lado do servidor
- **Express** - Framework para criar APIs de forma rápida e eficiente
- **MongoDB** - Banco de dados NoSQL para armazenamento dos livros e autores
- **Mongoose** - Biblioteca para modelagem de dados no MongoDB
- **Nodemon** - Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📂 Estrutura do Projeto

```
/
├── src/
│   ├── models/        # Definição dos modelos de dados (Livro, Autor)
│   ├── routes/        # Definição das rotas da API
│   ├── controllers/   # Controladores que gerenciam as requisições
│   ├── config/        # Configurações do banco de dados
│   ├── app.js         # Configuração principal da aplicação
├── package.json       # Dependências e scripts do projeto
├── .env               # Variáveis de ambiente
```

## 📌 Funcionalidades

- 📖 **Gerenciamento de Livros**: Criar, listar, atualizar e excluir livros
- ✍ **Gerenciamento de Autores**: Criar, listar, atualizar e excluir autores

## 🔧 Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/lohran-mendes/book-API.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd book-API
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   MONGO_URI=sua_string_de_conexão_com_mongodb
   PORT=3000
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

6. A API estará disponível em `http://localhost:3000`

## 🛠 Endpoints

### 📖 Livros

- `GET /livros` - Lista todos os livros
- `POST /livros` - Adiciona um novo livro
- `GET /livros/:id` - Busca um livro pelo ID
- `PUT /livros/:id` - Atualiza os dados de um livro
- `DELETE /livros/:id` - Remove um livro do sistema

### ✍ Autores

- `GET /autores` - Lista todos os autores
- `POST /autores` - Adiciona um novo autor
- `GET /autores/:id` - Busca um autor pelo ID
- `PUT /autores/:id` - Atualiza os dados de um autor
- `DELETE /autores/:id` - Remove um autor do sistema

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

---

Desenvolvido com 💙 por [Lohran Mendes](https://github.com/lohran-mendes)


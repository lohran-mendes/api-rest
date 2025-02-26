import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: mongoose.Schema.Types.String },
    preco: { type: mongoose.Schema.Types.Number },
    paginas: { type: mongoose.Schema.Types.Number },
  },
  { versionKey: false }
);

const livro = mongoose.model("livro", LivroSchema);

export default livro;

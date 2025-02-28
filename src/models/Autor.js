import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    nacionalidade: { type: mongoose.Schema.Types.String },
  },
  { versionKey: false }
);

const autor = mongoose.model("autores", AutorSchema);

export { autor, AutorSchema };

import express, { Router } from "express";

import { create, list, detail } from "../controllers/usuario.controller.js";
import { verificarToken, esAdmin } from "../middlewares/sesionJwt.js";

const app = express();
const usuarios = Router();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

usuarios.post("/usuarios", [verificarToken, esAdmin], create);

usuarios.get("/usuarios", list);

usuarios.get("/usuarios/:id", detail);

export default usuarios;

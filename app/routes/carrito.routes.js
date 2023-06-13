import express, { Router } from "express";

import { create, detail } from "../controllers/carrito.controller.js";
import { verificarToken, esUsuario } from "../middlewares/sesionJwt.js";

const app = express();
const carrito = Router();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


carrito.post("/carrito", [verificarToken, esUsuario], create);
// carrito.post("/carrito", [verificarToken, esUsuario], detail);
// carrito.post("/carrito", [verificarToken, esAdmin], create);

export default carrito;

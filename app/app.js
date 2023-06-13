import express from "express";
import indexRoutes from "./routes/index.routes.js";
import cursoRoutes from "./routes/curso.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import sesionRoutes from "./routes/sesion.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({}));

//rutas
app.use(indexRoutes);
app.use(cursoRoutes);
app.use(usuarioRoutes);
app.use(sesionRoutes);
app.use(carritoRoutes);

export default app;

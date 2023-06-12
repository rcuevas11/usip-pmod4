import { Router } from "express";

import { list, create, detail } from "../controllers/curso.controller.js";

const cursos = Router();

cursos.post("/cursos", create);
cursos.get("/cursos", list);
cursos.get("/cursos/:id", detail);
//tarea crear los servicios para la actualiacion y la eliminacion

export default cursos;

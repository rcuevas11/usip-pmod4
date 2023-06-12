import { Router } from "express";
import { login } from "../controllers/sesion.controller.js";

const sesionRoutes = Router();

sesionRoutes.post("/login", login);

export default sesionRoutes;

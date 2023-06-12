import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.json("bienvenidos al curso de usip backend con nodejs")
);

router.get("/hola2", (req, res) =>
  res.json("hola2")
);

export default router;

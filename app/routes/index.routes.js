import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json("Proyecto Modulo 4 - USIP");
});

export default router;
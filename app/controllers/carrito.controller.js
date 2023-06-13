import Carrito from "../models/carrito.model.js";
import Role from "../models/rol.model.js";
import bcryptjs from "bcryptjs";
import { QueryTypes } from "sequelize";
import { sequelize } from "../models/index.js";

export const create = (req, res) => {

  Carrito.findOne({
    where: { descripcion: req.body.descripcion_carrito}
  })
  .then(async (data) => {
    if (data === null) {
      // SI NO EXISTE EL CARRITO, CREAR
      Carrito.create({
        descripcion: req.body.descripcion_carrito,
        carrito_usuario: req.body.userId
      })
      .then(async (newCarrito) => {
        for (let carritoCuso of req.body.cursos) {
          let search = await sequelize.query(
            `SELECT * FROM carrito_curso WHERE carrito_curso."carritoId" = ${newCarrito.id} AND carrito_curso."cursoId" = ${carritoCuso.cursoId}`,
            {
              type: QueryTypes.SELECT
            }
          );
          if (search.length > 0 && search != null) {
            console.log(search);
          } else {
            await sequelize.query(
              `INSERT INTO public.carrito_curso
              ("createdAt", "updatedAt", "carritoId", "cursoId")
              VALUES('now()', 'now()', ${newCarrito.id}, ${carritoCuso.cursoId})`
            );
          }
        }
        res.status(201).send({
          message: "Registro Correcto!",
        });
      });
    } else {
      for (let carritoCuso of req.body.cursos) {
        let search = await sequelize.query(
          `SELECT * FROM carrito_curso WHERE carrito_curso."carritoId" = ${data.id} AND carrito_curso."cursoId" = ${carritoCuso.cursoId}`,
          {
            type: QueryTypes.SELECT
          }
        );
        if (search.length > 0 && search != null) {
          console.log(search);
        } else {
          await sequelize.query(
            `INSERT INTO public.carrito_curso
            ("createdAt", "updatedAt", "carritoId", "cursoId")
            VALUES('now()', 'now()', ${data.id}, ${carritoCuso.cursoId})`
          );
        }
      }
      res.status(201).send({
        message: "Registro Correcto!",
      });
    }
  })
  .catch((error) => {
    res.status(500).send({
      message: error.message,
    });
  });

};


export const detail = (req, res) => {
  res.json("TEST");
};

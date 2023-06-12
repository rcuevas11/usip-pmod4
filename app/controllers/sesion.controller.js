import Usuario from "../models/usuario.model.js";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!usuario)
    return res.status(400).send({
      mensage: "El campo usuario es obligatorio",
    });
  if (!contrasena)
    return res.status(400).send({
      mensage: "El campo contrasena es obligatorio",
    });

  Usuario.findOne({
    where: {
      usuario,
    },
  })
    .then((user) => {
      if (!user) {
        //si no se encontro el usuario
        return res.status(404).send({
          mensage: "Usuario no encontrado",
        });
      }
      //si encontro el usuario
      const esContrasenaValida = bcryptjs.compareSync(
        contrasena,
        user.contrasena
      );

      if (!esContrasenaValida) {
        return res.status(401).send({
          mensaje: "Contrasena invalida!",
        });
      }

      //y si es valida vamos a crearel token jwt
      const token = jwt.sign({ id: user.id }, "mi-secreto", {
        expiresIn: 86400, //24 horas de duracion
      });
      res.send({
        id: user.id,
        usuario: user.usuario,
        token,
      });
    })
    //si huno un error que no sabemos
    .catch((error) =>
      rest.status(500).send({ mensage: console.error.message })
    );
};

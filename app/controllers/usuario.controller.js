import Usuario from "../models/usuario.model.js";
import Role from "../models/rol.model.js";
import bcryptjs from "bcryptjs";

export const create = (req, res) => {
  //servicio de creacion de un curso
  console.log("create", req.body);
  const {
    body: { usuario, contrasena, correo, celular, nombre, apellido },
  } = req;

  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio!",
    });
    return;
  }

  if (!contrasena) {
    res.status(400).send({
      message: "El campo contrasena es obligatorio!",
    });
    return;
  }

  const usuarioInsert = {
    ...req.body,
    contrasena: bcryptjs.hashSync(contrasena, 8),
  };

  Usuario.create(usuarioInsert)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

export const list = (req, res) => {
  Usuario.findAll(
    {
      attributes: [
        'id', 'usuario', 'correo', 'nombre', 'apellido',
        'celular', 'createdAt', 'updatedAt'
      ]
    }
  )
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};


export const detail = (req, res) => {
  res.json("hola desde usuarios controller en la accion detail");
};

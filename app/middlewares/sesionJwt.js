import jwt from "jsonwebtoken";
import Usuario from "../models/usuario.model.js";
import Role from "../models/rol.model.js";

export const verificarToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      mensaje: "Token Obligatorio!",
    });
  }

  jwt.verify(token, "mi-secreto", (error, decoded) => {
    if (error) {
      return res.status(401).send({
        mensaje: "No esta autorizado!",
      });
    }
    req.userIdDecoded = decoded.id;
    next();
  });
};

export const esAdmin = (req, res, next) => {
  Usuario.findByPk(req.userIdDecoded, {
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["id", "rol"],
      },
    ],
  }).then((user) => {
    // user.getRoles().then((roles) => {
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].rol == "ADMIN") {
        next();
        return;
      }
    }

    res.status(403).send({
      mensaje: "Usted no tiene el rol necesario!",
    });
    // });
  });
};

export const onlyJuan = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      mensaje: "Token Obligatorio!",
    });
  }

  jwt.verify(token, "mi-secreto", (error, decoded) => {
    if (error) {
      return res.status(401).send({
        mensaje: "No esta autorizado!",
      });
    }
    req.userId = decoded.id;
    Usuario.findByPk(decoded.id).then((user) => {
      if (user.usuario === "juan") {
        next();
      } else {
        res.status(404).send({
          mensaje: "no cuenta con los permisos",
        });
      }
    });
  });
};


export const esUsuario = (req, res, next) => {
  Usuario.findByPk(req.userIdDecoded, {
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["id", "rol"],
      },
    ],
  }).then((user) => {
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].rol == "USUARIO") {
        next();
        return;
      }
    }

    res.status(403).send({
      mensaje: "Usted no tiene el rol necesario!",
    });
  });
};
import Curso from "../models/curso.model.js";

export const create = (req, res) => {
  //servicio de creacion de un curso
  console.log("create", req.body);
  const {
    body: { titulo, descripcion, imagen },
  } = req;

  if (!titulo) {
    res.status(400).send({
      message: "El campo titulo es obligatorio!",
    });
    return;
  }

  if (!imagen) {
    res.status(400).send({
      message: "El campo imagen es obligatorio!",
    });
    return;
  }

  const curso = {
    titulo,
    descripcion,
    imagen,
  };

  Curso.create(curso)
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
  //servicio de listado de los cursos
  console.log("list method called");
  Curso.findAll()
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

export const detail = (req, res) => {
  //servicio de detalle de un curso
  console.log("detalle", req.params);
  Curso.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

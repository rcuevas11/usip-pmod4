import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";
import Curso from "./curso.model.js";
import Usuario from "./usuario.model.js";

const Carrito = sequelize.define("carrito", {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  carrito_usuario: {
    type: DataTypes.INTEGER
  }
});

// Carrito.belongsTo(Usuario, {foreignKey:'carrito_usuario'});

Carrito.belongsToMany(Curso, {
  through: "carrito_curso",
  foreignKey: "carritoId",
  otherKey: "cursoId",
});

Curso.belongsToMany(Carrito, {
  through: "carrito_curso",
  foreignKey: "cursoId",
  otherKey: "carritoId",
});

export default Carrito;

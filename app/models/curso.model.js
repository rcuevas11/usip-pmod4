import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Curso = sequelize.define("cursos", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

export default Curso;

import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";
import Role from "./rol.model.js";
import Carrito from "./carrito.model.js";

const Usuario = sequelize.define("usuarios", {
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  celular: {
    type: DataTypes.STRING,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Usuario.hasMany(Carrito, { foreignKey: 'carrito_usuario' });

Usuario.belongsToMany(Role, {
  through: "user_role",
  foreignKey: "userId",
  otherKey: "roleId",
});

Role.belongsToMany(Usuario, {
  through: "user_role",
  foreignKey: "roleId",
  otherKey: "userId",
});

export default Usuario;

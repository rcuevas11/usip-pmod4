import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Role = sequelize.define("roles", {
  rol: {
    type: DataTypes.STRING,
  },
});

export default Role;

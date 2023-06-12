import Role from "./app/models/rol.model.js";

export const preInsertRoles = () => {
  Role.create({
    rol: "USUARIO",
  });
  Role.create({
    rol: "ADMIN",
  });
};

import { sequelize } from "./app/models/index.js";

sequelize
  .sync()
  .then(() => {
    preInsertRoles();
    console.log("Sync database success full");
  })
  .catch((error) => console.error("Some Error: ", error));

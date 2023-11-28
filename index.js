// Importar Knex y la configuración de la base de datos
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "montanna", // Nombre de la base de datos creada
  },
});

// Crear una tabla utilizando Knex (opcional)
knex.schema
  .createTable("usuarios", (table) => {
    table.increments("id");
    table.string("nombre");
    table.string("email");
  })
  .then(() => {
    console.log("Tabla de usuarios creada con éxito");
  })
  .catch((error) => {
    console.error("Error al crear la tabla de usuarios:", error);
  });

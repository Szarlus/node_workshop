module.exports = {
  type: "postgres",
  url: "postgres://todos:password@todos-db:5432/todos",
  entities: ["src/tsh-todo-list/**/*.entity.js"],
  migrationsTableName: "migrations",
  migrations: ["src/tsh-todo-list/migrations/*.js"],
  logging: true,
  cli: {
    migrationsDir: "src/tsh-todo-list/migrations"
  }
};

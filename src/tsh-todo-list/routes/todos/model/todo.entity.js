const { EntitySchema } = require("typeorm");
const { Todo } = require("./todo");

module.exports = new EntitySchema({
  name: "Todo",
  target: Todo,
  columns: {
    id: {
      primary: true,
      type: "uuid"
    },
    name: {
      type: "varchar"
    },
    done: {
      type: "bool"
    }
  }
});

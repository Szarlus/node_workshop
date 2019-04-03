class TodosRepository {
  constructor() {
    this.todos = [];
  }

  async add(todo) {
    this.todos.push(todo);
  }
}

module.exports = new TodosRepository();

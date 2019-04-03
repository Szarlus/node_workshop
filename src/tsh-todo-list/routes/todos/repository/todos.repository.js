class TodosRepository {
  constructor() {
    this.todos = [];
  }

  async add(todo) {
    this.todos.push(todo);
  }

  async findOne(id) {
    return this.todos.find(t => t.id === id);
  }

  async findAll() {
    return this.todos;
  }
}

module.exports = new TodosRepository();

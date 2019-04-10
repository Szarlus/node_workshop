class TodosRepository {
  constructor() {
    this.todos = [];
  }

  async add(todo) {
    this.todos.push(todo);
    console.log(this.todos);
  }

  async findOne(id) {
    return this.todos.find(t => t.id === id);
  }

  async all() {
    return this.todos;
  }
}

module.exports = TodosRepository;

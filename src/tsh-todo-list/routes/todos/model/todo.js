class Todo {
  constructor(id, name, done = false) {
    this.id = id;
    this.name = name;
    this.done = done;
  }

  complete() {
    this.done = true;
  }
}

module.exports = Todo;

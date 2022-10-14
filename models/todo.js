const { v4: uuid } = require('uuid');

class Todo {
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.completedAt = null;
  }
}

module.exports = Todo;

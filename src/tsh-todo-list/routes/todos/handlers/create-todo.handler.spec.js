const CreateTodoHandler = require("./create-todo.handler");
const CreateTodoCommand = require("../commands/create-todo.command");
const assert = require("assert");
const sinon = require("sinon");

it("Handles command", async () => {
  try {
    const spyInsert = sinon.spy();
    const mockRepo = {
      insert: spyInsert
    };

    const handler = new CreateTodoHandler(mockRepo);

    await handler.handle(new CreateTodoCommand("test", "testName"));

    assert.deepEqual(spyInsert.firstCall.args[0], {
      id: "test",
      name: "testName",
      done: false
    });
  } catch (error) {
    assert.fail("Should not be called");
  }
});

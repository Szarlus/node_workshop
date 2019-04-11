const createContainer = require("../../../app/container");
const request = require("supertest");
const { Joi } = require("celebrate");
const assert = require("assert");

describe("CreateTodo", () => {
  it("Creates new todo", async () => {
    const container = await createContainer();
    const server = container.resolve("server");

    return request(server.getApp())
      .post("/todos")
      .send({
        name: "test todo"
      })
      .expect(201)
      .then(response => {
        const expectedSchema = Joi.object().keys({
          id: Joi.string()
            .uuid()
            .required(),
          name: Joi.valid("test todo").required(),
          done: Joi.valid(false).required()
        });

        assert.equal(Joi.validate(response.body, expectedSchema).error, null);
      })
      .finally(() => {
        container.resolve("dbConnection").close();
      });
  });

  it("Validates create todo request", async () => {
    const container = await createContainer();
    const server = container.resolve("server");

    return request(server.getApp())
      .post("/todos")
      .expect(422)
      .then(response => {
        const expectedResponse = {
          code: 422,
          message: "Validation error",
          errors: [
            {
              message: '"name" is required',
              path: ["name"],
              type: "any.required",
              context: { key: "name", label: "name" }
            }
          ]
        };

        assert.deepEqual(response.body, expectedResponse);
      })
      .finally(() => {
        container.resolve("dbConnection").close();
      });
  });
});

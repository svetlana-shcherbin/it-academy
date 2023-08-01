const axios = require("axios");
const validator = require("jsonschema");
const getAllUsersSchema = require("../data/getAllUsers.v1.json");
const postAndPutUsersSchema = require("../data/postAndPutUsers.v1.json");
const getOneUserSchema = require("../data/getOneUser.v1.json");

describe("API GET all users tests", function () {
  let response;
  beforeAll(async () => {
    response = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users",
      {
        headers: {
          accept: "text/plain; v=1.0",
        },
      }
    );
  });
  test("GET request should be 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("GET should be valid json schema", async () => {
    const result = await validator.validate(response.data, getAllUsersSchema);
    await expect(result.valid).toEqual(true);
  });
});
describe("API POST a new user tests", function () {
  let response;
  beforeAll(async () => {
    response = await axios.post(
      "https://fakerestapi.azurewebsites.net/api/v1/Users",
      {
        id: 0,
        userName: "string",
        password: "string",
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
      }
    );
  });
  test("POST request should be 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("POST should be valid json schema", async () => {
    const result = await validator.validate(
      response.data,
      postAndPutUsersSchema
    );
    await expect(result.valid).toEqual(true);
  });
});
describe("GET one user tests", function () {
  let response;
  beforeAll(async () => {
    response = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/1",
      {
        headers: {
          accept: "*/*",
        },
      }
    );
  });
  test("GET request should be 200", async () => {
    await expect(response.status).toEqual(200);
  });
  test("GET should be valid json schema", async () => {
    const result = await validator.validate(response.data, getOneUserSchema);
    await expect(result.valid).toEqual(true);
  });
});
describe("API PUT a user", function () {
  let response;
  beforeAll(async () => {
    response = await axios.put(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/1",
      {
        id: 0,
        userName: "string",
        password: "string",
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
      }
    );
  });
  test("PUT request should be 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("PUT should be valid json schema", async () => {
    const result = await validator.validate(
      response.data,
      postAndPutUsersSchema
    );
    await expect(result.valid).toEqual(true);
  });
});
describe("API DELETE a user", function () {
  test("DELETE request should be 200", async () => {
    const response = await axios.delete(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/1",
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    await expect(response.status).toEqual(200);
  });
});

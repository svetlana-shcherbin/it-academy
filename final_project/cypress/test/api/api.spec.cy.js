const citiesPopular = require("./schemas/citiesPopular.v1");
const Ajv = require("ajv");
const ajv = new Ajv();

describe("API test", () => {
  it("GET validate request /cities/popular", () => {
    cy.request("https://www.lamoda.by/api/v1/cities/popular").then(
      (response) => {
        expect(response.status).to.equal(200);
      }
    );
  });
  it("validate JSON Schema of response /cities/popular", () => {
    cy.request("https://www.lamoda.by/api/v1/cities/popular").then(
      (response) => {
        cy.validateSchema(citiesPopular, response.body);
      }
    );
  });
});

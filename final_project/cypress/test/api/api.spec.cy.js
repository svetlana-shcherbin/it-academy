const citiesPopular = require("./schemas/citiesPopular.v1");
const Ajv = require("ajv");
const ajv = new Ajv();
const params = ["?section=sport&limit=10&gender=men"];

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
  it("GET validate request recommendations/section", () => {
    cy.request({
      method: "GET",
      url: "https://www.lamoda.by/api/v1/recommendations/section",
      qs: {
        section: "sport",
        limit: "10",
        gender: "men",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  it("negative test of GET validate request recommendations/section", () => {
    cy.request({
      method: "GET",
      url: "https://www.lamoda.by/api/v1/recommendations/section",
      failOnStatusCode: false,
      qs: {
        section: "sport",
        limit: "10",
        gender: "",
      },
    }).then((response) => {
      expect(response.status).to.equal(400),
        expect(response.body).to.have.property(
          "message",
          "gender should be one of [all men women girls boys kids prism]"
        );
    });
  });
});

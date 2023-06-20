///reference types="cypress" />

describe("Validate Header", () => {
  it("successfully validate content-type", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");

    cy.get("@pokemon")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");

    cy.get("@pokemon")
      .its("body")
      .then((body) => {
        expect(body).to.have.property("name", "ditto");
        expect(body).to.have.property("base_experience");
        expect(body).to.have.property("abilities");
      });
  });
  it("succsessfully validate status code", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("ditto");
    cy.get("@ditto").its("status").should("equal", 200);
  });

  it("succsessfully validate status code with params", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2&per_pages=1&delay=3",
    }).as("users");
    cy.get("@users").its("status").should("equal", 200);
  });

  it("succsessfully validate content", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/bulbasaur").as("bulbasaur");
    cy.get("@bulbasaur").its("body").should("include", { name: "bulbasaur" });
  });

  it.only("succsessfully validate content persian", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/persian").as("persian");
    cy.get("@persian")
      .its("body")
      .then((body) => {
        expect(body.abilities[0].ability.name).to.equal("limber");
        expect(body.abilities[0].ability.url).to.equal(
          "https://pokeapi.co/api/v2/ability/7/"
        );
      });
  });
});

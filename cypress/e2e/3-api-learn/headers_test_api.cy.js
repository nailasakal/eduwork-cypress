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
});

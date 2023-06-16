describe("Basic Auth", function () {
  it("Successfully login by appending username and password in URL", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });
  it("Successfully Login Using Headers", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      Headers: {
        authorization: "Basic YWRtaW46YWRtaW4=",
      },
      failOnStatusCode: false,
    });
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });

  it("loginViaAPI", () => {
    cy.loginViaAPI('admin', 'admin');
  });
});

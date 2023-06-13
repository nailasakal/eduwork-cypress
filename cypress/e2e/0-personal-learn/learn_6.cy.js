///<reference types="cypress" />

describe("Login & Logout", () => {
  it("Should Fail Login", () => {
    cy.fixture("auth").then((auth) => {
      cy.login(auth.username_locked_out, auth.password);
      cy.get("h3").should(
        "contain.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
    });
  });

  it("Should Success Login", () => {
    cy.fixture("auth").then((auth) => {
      cy.login(auth.username_standart, auth.password);
      cy.get(".title").contains("Products");
    });
  });

  it("Should Success Logout", () => {
    cy.fixture("auth").then((auth) => {
      cy.login(auth.username_standart, auth.password);
      cy.get("#logout_sidebar_link").click();
      cy.get("#login-button").should("contain.value", "Login");
    });
  });
});

Cypress.Commands.add("login", (name, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type(name);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

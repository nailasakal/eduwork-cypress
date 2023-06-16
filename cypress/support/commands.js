// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://zero.webappsecurity.com/login.html");
  cy.get("#user_login").type(username);
  cy.get("#user_password").type(password);
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("paybill", (amount, date, description) => {
    cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
    cy.get("#sp_amount").type(amount);
    cy.get("#sp_description").type(description);
    cy.get("#sp_date").type(date);
    cy.get("#pay_saved_payees").click();
  }
);

Cypress.Commands.add(
  "loginViaAPI",
  (
    email = Cypress.env("userEmail"),
    password = Cypress.env("userPassword")
  ) => {
    cy.request("POST", `${Cypress.env("apiUrl")}/users/login`, {
      username: email,
      password: password,
    }).then((response) => {
      cy.setCookie("sessionId", response.body.sessionId);
      cy.setCookie("userId", response.body.userId);
      cy.setCookie("userName", response.body.userName);
      cy.visit("/#!/main");
    });
  }
);

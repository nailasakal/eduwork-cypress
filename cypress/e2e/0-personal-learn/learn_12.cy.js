///<reference types="cypress" />
import "cypress-iframe";

describe("make a purchase transaction", () => {
  it("buy items with the GoPay QR Code", () => {
    cy.visit("https://demo.midtrans.com/");
    cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
    cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
    cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
      .clear()
      .type("budi@utomo.com");
    cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
      .clear()
      .type("081808466410");
    cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
      .clear()
      .type("Jakarta");
    cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
      .clear()
      .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
    cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
      .clear()
      .type("10220");
    cy.get(".cart-checkout").click();
    cy.get("iframe")
      .should("be.visible")
      .then(($iframe) => {
        const iframe = $iframe.contents();
        cy.wrap(iframe)
          .find(".list-title.text-actionable-bold")
          .contains("GoPay")
          .click();
        cy.wrap(iframe).find(".qr-image").should("be.visible");
      });
  });


it("buy items by scanning the QR code shopeepay", () => {
  cy.visit("https://demo.midtrans.com/");
  cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
  cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
  cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
    .clear()
    .type("budi@utomo.com");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
    .clear()
    .type("081808466410");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
    .clear()
    .type("Jakarta");
  cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
    .clear()
    .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    .clear()
    .type("10220");
  cy.get(".cart-checkout").click();
  cy.get("iframe")
    .should("be.visible")
    .then(($iframe) => {
      const iframe = $iframe.contents();
      cy.wrap(iframe)
        .find(".list-title.text-actionable-bold")
        .contains("ShopeePay")
        .click();
      cy.wrap(iframe).find(".qr-image").should("be.visible");
    });
});

it("purchase items with a QRIS", () => {
  cy.visit("https://demo.midtrans.com/");
  cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
  cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
  cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
    .clear()
    .type("budi@utomo.com");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
    .clear()
    .type("081808466410");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
    .clear()
    .type("Jakarta");
  cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
    .clear()
    .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    .clear()
    .type("10220");
  cy.get(".cart-checkout").click();
  cy.get("iframe")
    .should("be.visible")
    .then(($iframe) => {
      const iframe = $iframe.contents();
      cy.wrap(iframe)
        .find(".list-title.text-actionable-bold")
        .contains("QRIS")
        .click();
      cy.wrap(iframe).find(".qr-image").should("be.visible");
    });
});

it("purchase items with a Akulaku PayLater", () => {
  cy.visit("https://demo.midtrans.com/");
  cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
  cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
  cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
    .clear()
    .type("budi@utomo.com");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
    .clear()
    .type("081808466410");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
    .clear()
    .type("Jakarta");
  cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
    .clear()
    .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    .clear()
    .type("10220");
  cy.get(".cart-checkout").click();
  cy.get("iframe")
    .should("be.visible")
    .then(($iframe) => {
      const iframe = $iframe.contents();
      cy.wrap(iframe)
        .find(".list-title.text-actionable-bold")
        .contains("Akulaku PayLater")
        .click();
    });
});


it("purchase items with a UOB EZ Pay", () => {
  cy.visit("https://demo.midtrans.com/");
  cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
  cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
  cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
    .clear()
    .type("budi@utomo.com");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
    .clear()
    .type("081808466410");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
    .clear()
    .type("Jakarta");
  cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
    .clear()
    .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    .clear()
    .type("10220");
  cy.get(".cart-checkout").click();
  cy.get("iframe")
    .should("be.visible")
    .then(($iframe) => {
      const iframe = $iframe.contents();
      cy.wrap(iframe)
        .find(".list-title.text-actionable-bold")
        .contains("UOB EZ Pay")
        .click();
    });
});


it("failed to make a purchase because it did not fill in a valid email", () => {
  cy.visit("https://demo.midtrans.com/");
  cy.get('a.btn.buy[data-reactid=".0.0.0.2.0.0.5"]').click();
  cy.get('input[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').clear().type("Budi");
  cy.get('input[type="email"][data-reactid=".0.0.1.0.3.0.0.1.1.0"]')
    .clear()
    .type("budi@ut");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.2.1.0"]')
    .clear()
    .type("081808466410");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.3.1.0"]')
    .clear()
    .type("Jakarta");
  cy.get('textarea[data-reactid=".0.0.1.0.3.0.0.4.1.0"]')
    .clear()
    .type("MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11");
  cy.get('input[type="text"][data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    .clear()
    .type("10220");
  cy.get(".cart-checkout").click();
  cy.get(".trans-status.trans-error")
    .should("be.visible")
    .contains("Sorry, something went wrong.");
});
});

  
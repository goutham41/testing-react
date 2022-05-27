/// <reference types="cypress"/>

describe("Counter Testing", function () {
  it("Button should exists", function () {
    cy.visit("http://localhost:3000/");
    cy.get(".cbtn").should("exist"); // should -> expect
    cy.get(".doesnexist").should("not.exist");
  });

  it("should increment Counter", function () {
    cy.visit("http://localhost:3000/");
    cy.get(".cbtn").should("have.text", "Counter increment : 0");
    cy.get(".cbtn").click();
    cy.get(".cbtn").click();
    cy.get(".cbtn").should("have.text", "Counter increment : 2");
    cy.get(".dbtn").should("have.text", "Counter decrement : 2");
    cy.get(".dbtn").click();
    cy.get(".dbtn").click();
    cy.get(".cbtn").should("have.text", "Counter increment : 0");
    cy.get(".dbtn").should("have.text", "Counter decrement : 0");
  });
  it("should have red color", function () {
    cy.get("h1").should("have.css", { color: "red" });
  });
});

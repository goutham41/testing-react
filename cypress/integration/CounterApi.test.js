/// <reference types="cypress"/>

describe("Couter test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("button should exist", () => {
    // https://localhost:3000

    // cy.visit("http://localhost:3000");
    cy.get(".counterbtn").should("exist");
    cy.get(".blabla").should("not.exist");
  });

  it("should increment counter", () => {
    //   cy.visit("http://localhost:3000");
    cy.get(".counterbtn").should("have.text", "Count is 0");
    cy.get(".counterbtn").click();
    cy.get(".counterbtn").should("have.text", "Count is 1");
  });

  it("should increment multiple times", () => {
    // cy.visit("http://localhost:3000");
    cy.get(".counterbtn").should("have.text", "Count is 0");
    cy.get(".counterbtn").click();
    cy.get(".counterbtn").click();
    cy.get(".counterbtn").click();
    cy.get(".counterbtn").click();
    cy.get(".counterbtn").should("have.text", "Count is 4");
  });
  it("color check", () => {
    cy.get("h3").should("have.css", { color: "red" });
  });

  it("should post on server", () => {
    cy.intercept("GET", "http://localhost:8080/counter", {
      value: 1,
    }).as("counterReq");

    cy.wait("@counterReq");

    cy.get(".counterbtn").should("have.text", "Count is 1");
  });
});

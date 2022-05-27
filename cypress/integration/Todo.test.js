/// <reference types="cypress"/>

describe("Todos Testing", function () {
  beforeEach(function () {
    cy.visit("https://example.cypress.io/todo");
  });
  it("should show basic structure", function () {
    cy.get(".new-todo").should("exist");
    cy.get(".todo-count").should("exist");
    cy.get(".filters").should("exist");
  });
  it ("should be able to add todo",function () {
     cy.get(".todo-list").children().should("have.length",2);
     cy.get(".new-todo").type("Antomated tests{enter}");
     cy.get(".todo-list").children().should("have.length", 3);
  });
  
  it("Count should increment by 1 by adding todo",function(){
        cy.get(".todo-count strong").should("have.text", 2);
        cy.get(".new-todo").type("Automated tests{enter}");
        cy.get(".todo-count strong").should("have.text", 3);
  })
});

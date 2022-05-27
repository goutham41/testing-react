describe("Input form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Test inputForm", () => {
    cy.get(".inputForm").focus();
    cy.get(".inputForm").type("LEARN CYPRESS{enter}");
  });
  it("Test for adding new task", () => {
    cy.get("p").should("have.text", "Total item in list: 1");
    cy.get(".inputForm").type("learn UNIT TESTING{enter}");
    cy.get("p").should("have.text", "Total item in list: 2");
  });
  it("Each element Should have a checkbox", () => {
    cy.get(".checkbox").should("exist");
    cy.get(".checkbox:first").check();
    cy.get(".todo-Item:first").should("have.css", {
      TextDecoder: "line-through",
    });
  });

  it("should post api request", () => {
    cy.intercept("GET", "http://localhost:8080/todos").as("todoPost");
    cy.wait("@todoPost");
    cy.get("p").should("have.text", "Total item in list: 2");
  });

  it("Each element Should have a delete button", () => {
    cy.get("#delete").should("exist");
    cy.get("#delete:last").click();
    cy.get("p").should("have.text", "Total item in list: 1");
  });
});

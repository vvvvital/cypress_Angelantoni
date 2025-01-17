describe("Visual test", () => {
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/react/dist/");
  });

  it("1. Put a number", () => {
    cy.get("#todo-input").type("1{enter}");
    cy.get(".todo-list li").should("have.length", 1).and("contain", "1");
  });

  it("2. Insert an activity", () => {
    cy.get("#todo-input").type("plant{enter}");
    cy.get(".todo-list li").should("have.length", 1).and("contain", "plant");
    cy.url().should("contain", "todo");
  });

  it("3. Verify task completed", () => {
    cy.get("#todo-input").type("Task to complete{enter}");
    cy.get(".toggle").click();
    cy.get(".todo-list li").should("have.class", "completed");
  });

  it("4. Clear completed working", () => {
    cy.get("#todo-input").type("Task to clear{enter}");
    cy.get(".toggle").click();
    cy.get(".clear-completed").click();
    cy.get(".todo-list li").should("have.length", 0);
  });

  it("5. Down arrow toggle all", () => {
    cy.get("#todo-input").type("Task 1{enter}");
    cy.get("#todo-input").type("Task 2{enter}");
    cy.get(".toggle-all").click();
    cy.get(".todo-list li").should("have.class", "completed");
  });

  it("6. Empty string", () => {
    cy.get("#todo-input").type("{enter}");
    cy.get(".todo-list li").should("have.length", 0);
  });

  it("7. Negative number", () => {
    cy.get("#todo-input").type("-5{enter}");
    cy.get(".todo-list li").should("have.length", 1).and("contain", "-5");
  });

  it("8. Very large number", () => {
    cy.get("#todo-input").type("999999999999{enter}");
    cy.get(".todo-list li").should("have.length", 1).and("contain", "999999999999");
  });

  it("9. Check input placeholder", () => {
    cy.get("#todo-input").should("have.attr", "placeholder", "What needs to be done?");
  });

  it("10. Add multiple tasks", () => {
    cy.get("#todo-input").type("Task 1{enter}");
    cy.get("#todo-input").type("Task 2{enter}");
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("11. Delete a task", () => {
    cy.get("#todo-input").type("Task to delete{enter}");
    cy.get(".todo-list li").find(".destroy").invoke("show").click();
    cy.get(".todo-list li").should("have.length", 0);
  });

  it("12. Filter tasks by 'Active'", () => {
    cy.get("#todo-input").type("Active Task{enter}");
    cy.get("#todo-input").type("Completed Task{enter}");
    cy.get(".todo-list li").first().find(".toggle").click();
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 1).and("not.have.class", "completed");
  });

  it("13. Filter tasks by 'Completed'", () => {
    cy.get("#todo-input").type("Active Task{enter}");
    cy.get("#todo-input").type("Completed Task{enter}");
    cy.get(".todo-list li").eq(1).find(".toggle").click();
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1).and("have.class", "completed");
  });

  it("14. Clear Completed button visibility", () => {
    cy.get("#todo-input").type("Task 1{enter}");
    cy.get(".toggle").click();
    cy.get(".clear-completed").should("be.visible").click();
    cy.get(".todo-list li").should("have.length", 0);
  });

  it("15. Only spaces", () => {
    cy.get("#todo-input").type("       {enter}");
    cy.get(".todo-list li").should("have.length", 0);
  });

});

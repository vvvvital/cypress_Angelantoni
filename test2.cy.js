describe("Registration form", () => {
    it("It should complete and submit the form succesfully", () => {
        cy.visit("https://the-internet.herokuapp.com/login");

        cy.get("#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");

        cy.get('.radius[type="submit"]').click();

        cy.contains("You logged into a secure area!").should('be.visible');
    })
})
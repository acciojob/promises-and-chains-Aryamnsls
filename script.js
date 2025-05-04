describe('Voting Eligibility Form', () => {
  // Handling uncaught exceptions that originate from application code
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test when an uncaught exception is detected
      return false; // Returning false will prevent the test from failing
    });
  });

  it('Check empty form validation', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("form");
    cy.get("input#age").should("have.value", "");
    cy.get("input#name").should("have.value", "");
    cy.get("button#btn");
  });

  it('Check form with empty inputs', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("button#btn").click();

    // Trimming the alert message and matching it with expected value
    cy.on("window:alert", (str) => {
      expect(str.trim()).to.equal("Please enter valid details."); // Ensures no extra spaces
    });
  });

  it('Check form with valid inputs (age > 18)', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("input#age").type("20");
    cy.get("input#name").type("John");
    cy.get("button#btn").click();
    cy.wait(4000);

    // Trimming the alert message and matching it with expected value
    cy.on("window:alert", (str) => {
      expect(str.trim()).to.equal("Welcome, John. You can vote."); // Ensures no extra spaces
    });
  });

  it('Check form with valid inputs (age < 18)', () => {
    cy.visit(baseUrl + "/main.html");
    cy.get("input#age").type("17");
    cy.get("input#name").type("Doe");
    cy.get("button#btn").click();
    cy.wait(4000);

    // Trimming the alert message and matching it with expected value
    cy.on("window:alert", (str) => {
      expect(str.trim()).to.equal("Oh sorry Doe. You aren't old enough."); // Ensures no extra spaces
    });
  });
});

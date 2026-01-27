Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login")
  cy.get("#email").type(email)
  cy.get("#password").type(password)
  cy.get("button[type='submit']").click()
})

Cypress.Commands.add("addToCart", () => {
  cy.get(".product-card").first().click()
  cy.get(".add-to-cart").click()
})
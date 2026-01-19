it("Should display Google Maps on contact page", () => {
  cy.openHomePage();
  cy.visit("/contact");

  cy.get("iframe")
    .should("exist")
    .and("be.visible");
});
it("Should display menu in English after language change", () => {
  cy.openHomePage();
  cy.changeLanguageToEnglish();

  cy.get("nav").should("contain.text", "Home");
  cy.get("nav").should("contain.text", "Contact");
});
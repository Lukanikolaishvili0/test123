describe("Cart Tests", () => {
  beforeEach(() => {
    cy.fixture("testData").as("data");
  });

  it("Should show correct old and new prices", function () {
    cy.openHomePage();
    cy.contains("Sale").click();

    cy.get(".old-price")
      .should("be.visible")
      .and("contain.text", this.data.oldPrice);

    cy.get(".new-price")
      .should("be.visible")
      .and("contain.text", this.data.newPrice);
  });
});
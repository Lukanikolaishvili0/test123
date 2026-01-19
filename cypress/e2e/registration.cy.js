describe("Registration tests", () => {

  beforeEach(() => {
    cy.fixture("register").as("registerData");
  });

  it("TC03 - Registration with valid data", function () {
    cy.visit("/index.php?rt=account/create");

    cy.get("#AccountFrm_email").type(this.registerData.user.email);
    cy.get("#AccountFrm_password").type(this.registerData.user.password);
    cy.get("#AccountFrm_confirm").type(this.registerData.user.password);

    cy.get("button[title='Continue']").click();

    cy.url().should("include", "success");
    cy.contains("Your Account Has Been Created").should("be.visible");
  });

});
describe("Authorization tests", () => {

  beforeEach(() => {
    cy.fixture("user").as("userData");
  });

  it("TC01 - Successful login", function () {
    cy.visit("/index.php?rt=account/login");

    cy.get("#loginFrm_loginname").type(this.userData.validUser.email);
    cy.get("#loginFrm_password").type(this.userData.validUser.password);
    cy.get("button[title='Login']").click();

    cy.url().should("include", "account");
    cy.contains("Logoff").should("be.visible");
  });

  it("TC02 - Login with invalid password", function () {
    cy.visit("/index.php?rt=account/login");

    cy.get("#loginFrm_loginname").type(this.userData.invalidUser.email);
    cy.get("#loginFrm_password").type(this.userData.invalidUser.password);
    cy.get("button[title='Login']").click();

    cy.contains("Error").should("be.visible");
    cy.url().should("include", "login");
  });

});
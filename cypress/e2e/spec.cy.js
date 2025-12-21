describe('Register User', () => {

  it('Test Case 1: Register User (16 steps)', () => {

    // Step 1-2: Launch browser & Navigate to url
    cy.visit('https://automationexercise.com')

    // Step 3: Verify home page is visible
    cy.contains('Home').should('be.visible')

    // Step 4: Click on 'Signup / Login'
    cy.contains('Signup / Login').click()

    // Step 5: Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible')

    // Step 6-7: Enter name and email address and click Signup
    const email = `luka_${Date.now()}@test.com` // უნიკალური მეილი

    cy.get('[data-qa="signup-name"]').type('Luka')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    // Step 8: Verify 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains('Enter Account Information').should('be.visible')

    // Step 9: Fill details
    cy.get('#password').type('Test1234')
    cy.get('#days').select('10')
    cy.get('#months').select('May')
    cy.get('#years').select('1995')

    // Step 10-11: Select checkboxes
    cy.get('#newsletter').check()
    cy.get('#optin').check()

    // Step 12: Fill address details
    cy.get('#first_name').type('Luka')
    cy.get('#last_name').type('Nikolaishvili')
    cy.get('#address1').type('Tbilisi')

    // Step 13-14: Country, state, city, zip, mobile
    cy.get('#country').select('Canada')
    cy.get('#state').type('Ontario')
    cy.get('#city').type('Toronto')
    cy.get('#zipcode').type('12345')
    cy.get('#mobile_number').type('555123456')

    // Step 15: Click 'Create Account'
    cy.contains('Create Account').click()

    // Step 16: Verify 'ACCOUNT CREATED!'
    cy.contains('Account Created!').should('be.visible')
  })

})
    
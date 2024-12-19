import userData from "../fixtures/signUpInfo.json"

describe('template spec', () => {
  it('Test Case 1: Register User', () => {
    cy.visit('/')

    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // 5. Verify 'New User Signup!' is visible
    cy.contains("New User Signup").should("be.visible")

    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);

    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains("Enter Account Information").should("be.visible")

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender2').click();
    cy.get('[data-qa="name"]').type(userData.name);
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get('select#days').select(userData.birthDate.day);
    cy.get('select#months').select(userData.birthDate.month);
    cy.get('select#years').select('2003');


    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check();

    //  12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type(userData.firstName);
    cy.get('[data-qa="last_name"]').type(userData.lastName);
    cy.get('[data-qa="address"]').type(userData.address);
    cy.get('select#country').select(userData.country);
    cy.get('[data-qa="state"]').type(userData.state);
    cy.get('[data-qa="city"]').type(userData.city);
    cy.get('[data-qa="zipcode"]').type(userData.zipcode);
    cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber);

    // 13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created!").should("be.visible")

    // 15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()

    // 16. Verify that 'Logged in as username' is visible
    cy.contains("takotako").should("be.visible")

  })
  it('passes', () => {
    cy.visit('/')
    cy.registration(userData)
  })

})


describe('template spec', () => {
  it('Test Case 2: Login User with correct email and password', () => {
    cy.visit('/')

    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible")

    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(userData.email)
    cy.get('[data-qa="login-password"]').type(userData.password)

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()

    // 8. Verify that 'Logged in as username' is visible
    cy.contains("takotako").should("be.visible")

  })
  it('passes', () => {
    cy.visit('/')
    cy.login(userData)
  })
})

describe('template spec', () => {
  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.visit('/')

    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible")

    // 6. Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type("takotako@gmail.com")
    cy.get('[data-qa="login-password"]').type(123123)

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains("Your email or password is incorrect!").should("be.visible")

  })
})
describe('automation exercise tests', () => {
  it('Test Case 1: Register User', () => {
  
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('http://automationexercise.com')

// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4)').click()

// 5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should("have.text", "New User Signup!")

// 6. Enter name and email address
cy.get('[data-qa="signup-name"]').type("Tako").should("have.value", "Tako")
cy.get('[data-qa="signup-email"]').type("t.altunashvili27@gmail.com") //.should("have.text", "t.altunashvili27@gmail.com")

// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
cy.get('#id_gender2').check()

// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.contains("Enter Account Information").should("be.visible")

// 9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('[data-qa="name"]').should("have.value", "Tako")
cy.get('[data-qa="email"]').should("have.value", "t.altunashvili27@gmail.com")
cy.get('[data-qa="password"]').type("12345678910")
cy.get('[data-qa="days"]').select("27")
cy.get('[data-qa="months"]').select("April")
cy.get('[data-qa="years"]').select("2003")

// 10. Select checkbox 'Sign up for our newsletter!'
cy.get('#newsletter').check()

// 11. Select checkbox 'Receive special offers from our partners!'
cy.get('#optin').check()

// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('[data-qa="first_name"]').type("Tamar")
cy.get('[data-qa="last_name"]').type("Altunashvili")
cy.get('[data-qa="address"]').type("test1")
cy.get('[data-qa="country"]').select(2)
cy.get('[data-qa="state"]').type("test2")
cy.get('[data-qa="city"]').type("test3")
cy.get('[data-qa="zipcode"]').type("test4")
cy.get('[data-qa="mobile_number"]').type("test5")

// 13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()

// 14. Verify that 'ACCOUNT CREATED!' is visible
cy.get('[data-qa="account-created"]').should("have.text","Account Created!")

// 15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()

// 16. Verify that 'Logged in as username' is visible
// cy.get('.nav > :nth-child(10)').should("have.text", "&nbsp;Logged in as Tako")

// 17. Click 'Delete Account' button
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
cy.get('[data-qa="account-deleted"]').should("have.text", "Account Deleted!")
cy.get('[data-qa="continue-button"]').click()

  })
})

describe('automation exercise tests', () => {
  it.skip('Test Case 2: Login User with correct email and password', () => {

  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit('https://automationexercise.com')

// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.contains("Login to your account").should("be.visible")

// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type("t.altunashvili0@gmail.com")
cy.get('[data-qa="login-password"]').type("123456789")

// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()

// 8. Verify that 'Logged in as username' is visible
cy.contains("Logged in as tako")

// 9. Click 'Delete Account' button
cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

// 10. Verify that 'ACCOUNT DELETED!' is visible
cy.get('[data-qa="account-deleted"]').should("have.text", "Account Deleted!")

  })
})

describe('automation exercise tests', () => {
  it.skip('Test Case 3: Login User with incorrect email and password', () => {

  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit('https://automationexercise.com')

// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.contains("Login to your account").should("be.visible")

// 6. Enter incorrect email address and password
cy.get('[data-qa="login-email"]').type("t.altunashvili12@gmail.com")
cy.get('[data-qa="login-password"]').type("787878")

// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()

// 8. Verify error 'Your email or password is incorrect!' is visible
cy.contains("Your email or password is incorrect!")

  })
})

describe('automation exercise tests', () => {
  it.skip('Test Case 4: Logout User', () => {

  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit('https://automationexercise.com')

// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'Login to your account' is visible
cy.contains("Login to your account").should("be.visible")

// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type("t.altunashvilii@gmail.com")
cy.get('[data-qa="login-password"]').type("0000000000")

// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click()

// 8. Verify that 'Logged in as username' is visible
cy.contains("Logged in as tako")

// 9. Click 'Logout' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 10. Verify that user is navigated to login page
cy.contains("Login to your account").should("be.visible")

  })
})

describe('automation exercise tests', () => {
  it.skip('Test Case 4: Logout User', () => {

  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit('https://automationexercise.com')

// 3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

// 5. Verify 'New User Signup!' is visible
cy.contains("New User Signup!").should("be.visible")

// 6. Enter name and already registered email address
cy.get('[data-qa="signup-name"]').type("tako")
cy.get('[data-qa="signup-email"]').type("t.altunashvilii@gmail.com")

// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()

// 8. Verify error 'Email Address already exist!' is visible
cy.contains("Email Address already exist!")

  })
})

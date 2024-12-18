describe('automation exercise tests', () => {
  it('Test Case 10: Verify Subscription in home page', () => {
    cy.visit('http://automationexercise.com')

//     3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

// 4. Scroll down to footer
cy.get('footer').scrollIntoView();

// 5. Verify text 'SUBSCRIPTION'
cy.contains("Subscription").should("be.visible")

// 6. Enter email address in input and click arrow button
cy.get('#susbscribe_email').type("t.altunashvili27@gmail.com")
cy.get('#subscribe > .fa').click()

// 7. Verify success message 'You have been successfully subscribed!' is visible
cy.contains("You have been successfully subscribed!").should("be.visible")

  })
})


describe('automation exercise tests', () => {
  it('Test Case 12: Add Products in Cart', () => {
    cy.visit('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    // 4. Click 'Products' button
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

    // 5. Hover over first product and click 'Add to cart'
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    // 6. Click 'Continue Shopping' button
    cy.get('.modal-footer > .btn').click()

    // 7. Hover over second product and click 'Add to cart'
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    // 8. Click 'View Cart' button
    cy.get('u').click()

    // 9. Verify both products are added to Cart
    cy.get('#product-1').should("be.visible")
    cy.get('#product-2').should("be.visible")

    // 10. Verify their prices, quantity and total price

    cy.get('#product-1 > .cart_price').contains("Rs. 500")
    cy.get('#product-2 > .cart_price').contains("Rs. 400")

    cy.get('#product-1 > .cart_quantity > .disabled').contains("1")
    cy.get('#product-2 > .cart_quantity > .disabled').contains("1")

    cy.get('#product-1 > .cart_total').contains("Rs. 500")
    cy.get('#product-2 > .cart_total').contains("Rs. 400")

  })
})

describe('automation exercise tests', () => {
  it.only('Test Case 16: Place Order: Login before Checkout', () => {
    cy.visit('http://automationexercise.com')

    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    cy.login("t.altunashvili27@gmail.com", "taltunashvili27")

    // 6. Verify 'Logged in as username' at top
    cy.get(':nth-child(10) > a').contains("tako")

    // 7. Add products to cart
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    // 8. Click 'Cart' button
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

    // 9. Verify that cart page is displayed
    cy.get('.breadcrumb').contains("Shopping Cart")

    // 10. Click Proceed To Checkout
    cy.get('.col-sm-6 > .btn').click()

    // 11. Verify Address Details and Review Your Order
    cy.contains("Address Details").should("be.visible")
    cy.contains("Review Your Order").should("be.visible")

    // 12. Enter description in comment text area and click 'Place Order'
    cy.get('footer').scrollIntoView();
    cy.get('.form-control').type("description")
    cy.get(':nth-child(7) > .btn').click()

    // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="name-on-card"]').type("Tamar Altunashvili")
    cy.get('[data-qa="card-number"]').type("67")
    cy.get('[data-qa="cvc"]').type("311")
    cy.get('[data-qa="expiry-month"]').type("12")
    cy.get('[data-qa="expiry-year"]').type("2025")

    // 14. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click()

    // 15. Verify success message 'Your order has been placed successfully!'
        cy.contains("Congratulations! Your order has been confirmed!").should("be.visible")

  })
})



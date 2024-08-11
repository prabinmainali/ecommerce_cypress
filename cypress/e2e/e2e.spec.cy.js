// cypress/e2e/e2e.spec.cy.js

import LoginPage from '../support/pageObjects/LoginPage';
import ProductPage from '../support/pageObjects/ProductPage';
import CartPage from '../support/pageObjects/CartPage';
import CheckoutPage from '../support/pageObjects/CheckoutPage';

describe('E-Commerce Site Tests', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.product_label').should('contain.text', 'Products');
  });

  it('should add a product to the cart and complete checkout', () => {
    loginPage.login('standard_user', 'secret_sauce');

    productPage.addProductToCart('Sauce Labs Backpack');
    productPage.getCartBadge().should('have.text', '1');

    cy.get('.shopping_cart_link').click();
    cartPage.getCheckoutButton().click();

    checkoutPage.completeCheckout('John', 'Doe', '12345');
    checkoutPage.getOrderConfirmation().should('contain.text', 'THANK YOU FOR YOUR ORDER');
  });

  it('should handle login with invalid credentials', () => {
    loginPage.login('invalid_user', 'invalid_password');
    cy.get('[data-test="error"]').should('be.visible');
  });

  // it('should handle adding a non-existent product to the cart', () => {
  //   loginPage.login('standard_user', 'secret_sauce');

  //   productPage.addProductToCart('Non-Existent Product');
  //   cy.get('.shopping_cart_badge').should('not.exist');
  // });

  it('should ensure cart is empty when no items are added', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('not.exist');
  });

  it('should handle missing checkout details', () => {
    loginPage.login('standard_user', 'secret_sauce');

    productPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_link').click();
    cartPage.getCheckoutButton().click();

    checkoutPage.getContinueButton().click(); // Skipping details
    cy.get('[data-test="error"]').should('be.visible');
  });
});

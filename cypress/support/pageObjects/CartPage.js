class CartPage {
    getCheckoutButton() {
        return cy.get('.checkout_button');
    }

    getCartItems() {
        return cy.get('.cart_item');
    }
}

export default CartPage;

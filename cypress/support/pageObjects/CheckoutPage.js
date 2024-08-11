class CheckoutPage {
    getFirstNameField() {
        return cy.get('[data-test="firstName"]');
    }

    getLastNameField() {
        return cy.get('[data-test="lastName"]');
    }

    getPostalCodeField() {
        return cy.get('[data-test="postalCode"]');
    }

    getContinueButton() {
        return cy.get('input.cart_button');
    }

    getFinishButton() {
        return cy.get('a.cart_button');
    }

    getOrderConfirmation() {
        return cy.get('.complete-header');
    }

    completeCheckout(firstName, lastName, postalCode) {
        this.getFirstNameField().type(firstName);
        this.getLastNameField().type(lastName);
        this.getPostalCodeField().type(postalCode);
        this.getContinueButton().click();
        this.getFinishButton().click();
    }
}

export default CheckoutPage;

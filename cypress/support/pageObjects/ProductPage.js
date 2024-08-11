class ProductPage {
    getProductList() {
        return cy.get('.inventory_item');
    }

    getAddToCartButton(productName) {
        return cy.contains(productName).parent().parent().find('.btn_inventory');
    }

    getCartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    addProductToCart(productName) {
        this.getAddToCartButton(productName).click();
    }
}

export default ProductPage;

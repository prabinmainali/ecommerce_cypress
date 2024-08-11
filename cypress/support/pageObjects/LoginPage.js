class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    }

    getUsernameField() {
        return cy.get('[data-test="username"]');
    }

    getPasswordField() {
        return cy.get('[data-test="password"]');
    }

    getLoginButton() {
        return cy.get('#login-button');
    }

    login(username, password) {
        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}

export default LoginPage;

# ecommerce_cypress

## Introduction

This repository contains end-to-end tests for the e-commerce site using Cypress. It follows the Page Object Model (POM) design principles.

## Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cypress-ecommerce

2.  **Install dependencies**

      npm install

3. **Run Cypress tests**

   npx cypress open


## Test Scenarios
   **Login Test:**
   
   Successful login with valid credentials.
   Login with invalid credentials.
   Product Interaction:
   Add a product to the cart.
   Verify item count in the cart.
   
   **Checkout Process:**
   
   Complete checkout with valid payment details.
   Verify order confirmation.

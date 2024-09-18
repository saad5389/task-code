import { expect } from '@playwright/test';
const data = require('../data/route.json');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailInput = 'input[placeholder="Email address"]';
        this.passwordInput = 'input[placeholder="Password"]';
        this.submitButton = 'button[data-pw="btn-signin"]';
        this.profileBtn = '[data-pw="btn-user-prof"]'
    }

    async navigate() {
        await this.page.goto('/');
    }

    async login(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
        await expect(this.page.locator(this.profileBtn)).toBeVisible();
    }

    async assertURL() {
        await expect(this.page).toHaveURL(data.profile);
      }
}
import { expect } from '@playwright/test';
const data = require('../data/route.json');

exports.LogoutPage = class LogoutPage {

    constructor(page) {
        this.page = page;
        this.profileBtn = page.locator('[data-pw="btn-user-prof"]');
        this.signOut = page.locator('span').filter({ hasText: 'Sign out' });
    }

    async logout() {
        await this.profileBtn.click();
        await this.signOut.click();
    }

    async assertURL() {
        await expect(this.page).toHaveURL(data.homepage);
      }
}
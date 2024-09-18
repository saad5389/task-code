import { test } from '@playwright/test';
const { LoginPage } = require('../../pages/login.page');
const { LogoutPage } = require('../../pages/logout.page');
const { WorkspacePage } = require('../../pages/workspace.page');
const data = require('../../data/credentials.json');

test.describe('Login Tests', () => {

    test.beforeEach('Verify that user should login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(data.validUser.email, data.validUser.password);
        await loginPage.assertURL();
    });

    test('Add workspace', async ({ page }) => {
        const workspacePage = new WorkspacePage(page);
        await workspacePage.createWorkspace();
    });

    test.afterEach('Verify that user should logout successfully', async ({ page }) => {
        const logoutPage = new LogoutPage(page);
        await logoutPage.logout()
        await logoutPage.assertURL();
    });
});
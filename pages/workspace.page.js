import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';

const data = require('../data/credentials.json');
export const companyName = faker.company.name();
export const email = faker.internet.email();

exports.WorkspacePage = class WorkspacePage {

    constructor(page) {
        this.page = page;
        this.profileBtn = page.locator('[data-pw="btn-user-prof"]');
        this.workspaces = page.locator('span').filter({ hasText: 'Workspaces' });
        this.addWorkspaceBtn = page.locator('.dls-shrink.dls-me-12');
        this.nextBtn = page.locator('[data-pw="btn-next"]');
        this.workspaceAdded = page.locator('span').filter({ hasText: 'Workspace added Successfully.'});
        this.workspaceUserAdded = page.locator('span').filter({ hasText: 'Users added to workspace Successfully.'});
        this.addWorkspace = page.getByPlaceholder('Name your workspace e.g. Customer Support');
        this.deleteUser = page.locator('.isax-trash');
        this.userInviteEmail = page.getByPlaceholder('Email Address');
        this.inviteUserBtn = page.locator('[data-pw="btn-save"]');
        this.createdWorkspace = page.locator('[data-pw="data-table"]');
    }

    async createWorkspace() {
        await this.workspaces.click();
        await this.addWorkspaceBtn.click();
        await this.addWorkspace.fill(companyName);
        await this.nextBtn.click();
        await expect(this.workspaceAdded).toBeVisible();
        await this.deleteUser.click();
        await this.userInviteEmail.fill(data.invalidUser.email)
        await this.inviteUserBtn.click();
        await expect(this.workspaceUserAdded).toBeVisible();
        await expect(this.createdWorkspace).toBeVisible();
        await this.page.reload();
    }
}
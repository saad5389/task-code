import { test, expect } from '@playwright/test';

const creds = require('../../data/credentials.json');
const data = require('../../data/route.json');

test.describe('Login API Tests', () => {
  test('Login API', async ({ request }) => {
    const responsePost = await request.post(data.apiBaseURL + '/auth/login', {
        headers:{
            'Content-Type': 'application/json'
        },
        data: {
            email: creds.validUser.email,
            password: creds.validUser.password
        }
    });
    
    expect(responsePost.status).toBe(200);
    expect(responsePost.message).toBe('Login successful');
  });
});

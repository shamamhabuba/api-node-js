// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API for empty users', () => {
    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

})
test.describe('User management API for existing users', () => {
    test.skip('GET /:id - should return a user by ID', async ({ request }) => {
        const response= await request.get(`${baseURL}`+"/100");
        expect(response.status()).toBe(200);
        const responseBody = await response.json()
        expect(responseBody.id).toBe(100);

    });

    test.skip('GET /:id - should return 404 if user not found', async ({ request }) => {
        const response= await request.get(`${baseURL}`+"/101");
        expect(response.status()).toBe(404);
    });

    test('POST / - should add a new user', async ({ request }) => {
        const response= await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
    });

    test('DELETE /:id - should delete a user by ID', async ({ request }) => {
        //creat new user
        const responseUserCreation= await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId= responseBodyUserCreation.id
        //deletion of user
        const response= await request.delete(`${baseURL}`+ "/"+userId);
        expect(response.status()).toBe(200);

    });

    test('DELETE /:id - should return 404 if user not found', async ({ request }) => {
//create user
        const responseUserCreation= await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId= responseBodyUserCreation.id
        //delete user by Id
        const responseDeletionOne= await request.delete(`${baseURL}`+ "/"+userId);
        expect(responseDeletionOne.status()).toBe(200);
        // delete user again with the same Id
        const responseDeletionTwo= await request.delete(`${baseURL}`+ "/"+userId);
        expect(responseDeletionTwo.status()).toBe(404);
    });


});
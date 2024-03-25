import request from 'supertest';
import express from 'express';
import Server from '../../src/server/Server';

describe('Hello World Controller', () => {
	let app: express.Application;
	const server: Server = new Server();

	beforeEach(() => {
		app = server.getApplication();
	});

	it('should respond with a status 200 when call GET /', async () => {
		const response = await request(app).get('/api');

		expect(response.status).toBe(200);
	});

	it('should respond with a message body when call GET /', async () => {
		const response = await request(app).get('/api');

		expect(response.body).toEqual({
			success: true,
			message: 'Hello World',
		});
	});

	it('should respond with a status 404 when route is not exist /', async () => {
		const response = await request(app).get('/api/not-existing-route');

		expect(response.status).toBe(404);
	});
});

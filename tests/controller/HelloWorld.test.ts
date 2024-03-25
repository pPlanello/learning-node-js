import request from 'supertest';
import express from 'express';
import Server from '../../src/server/Server';

describe('Hello World Controller', () => {
	let app: express.Application;
	let server: Server;

	beforeEach(() => {
		server = new Server();
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
});

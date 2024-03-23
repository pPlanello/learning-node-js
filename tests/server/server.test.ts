import Server from '../../src/server/Server';

describe('Server', () => {
	let server: Server;

	beforeEach(() => {
		jest.resetModules();
		server = new Server();
	});

	it('should return the default port when is not found in environment variable', () => {
		delete process.env.PORT;

		expect(server.getPort()).toBe(8000);
	});

	it('should return the correct port number when is in environment variable', () => {
		expect(server.getPort()).toBe(3000);
	});
});

import Server from '../../src/server/Server';

describe('Server', () => {
	let server: Server;
	const originalEnvironment: NodeJS.ProcessEnv = { ...process.env };

	beforeEach(() => {
		process.env = { ...originalEnvironment };
	});

	afterEach(() => {
		process.env = originalEnvironment;
	});

	it('should return the correct port number when is in environment variable', () => {
		server = new Server();

		expect(server.getPort()).toBe(3000);
	});

	it('should return the default port when is not found in environment variable', () => {
		delete process.env.PORT;

		server = new Server();

		expect(server.getPort()).toBe(8000);
	});
});

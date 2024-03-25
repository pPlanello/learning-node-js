import express, { Application } from 'express';

import helloWorld from '../router/HelloWorld.router';

export default class Server {
	private app: Application;
	private port: number;

	listen() {
		this.app.listen(this.port, () => {
			console.log('Server listening on port: ' + this.port);
		});
	}

	constructor() {
		this.app = express();
		this.port = Number(process.env.PORT) || 8000;

		this.middlewares();
		this.configureRoutes();
	}

	private middlewares() {
		this.app.use(express.json());
	}

	private configureRoutes() {
		this.app.use('/api', helloWorld);
	}

	getPort(): number {
		return this.port;
	}

	getApplication(): Application {
		return this.app;
	}
}

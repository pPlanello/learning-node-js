import express, { Application } from 'express';

export default class Server {
	private app: Application;
	private port: number;

	listen() {
		this.app.listen(this.port, () => {
			console.log('Server listening on port: ', this.port);
		});
	}

	constructor() {
		this.app = express();
		this.port = Number(process.env.PORT) || 8000;
	}

	getPort(): number {
		return this.port;
	}
}

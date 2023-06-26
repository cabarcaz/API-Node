import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors';

class App {
	readonly expressApp: Application;

	constructor(){
		this.expressApp = express();
		this.mountHealthCheck()
		this.mountMiddleware()
		this.mountError()
	}

	// Principio SOLID: Open/Close
	mountHealthCheck(){
		this.expressApp.use('/', routerHealth)
	}

	mountMiddleware(){
		this.expressApp.use(express.json())
		this.expressApp.use(express.urlencoded({ extended: true }))
	}

	mountError(): void {
		this.expressApp.use(HandlerErrors.notFound)
	}

	}

export default new App().expressApp

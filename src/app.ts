import express, { Application } from 'express'
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'
import routerUser from './modules/user/interfaces/http/user.routes'

class App {
	readonly expressApp: Application;

	constructor() {
		this.expressApp = express()
		this.owaspSecurityMiddleware()
		this.mountHealthCheck()
		this.mountMiddleware()
		this.mountRouter()
		this.mountError()
	}

	owaspSecurityMiddleware() {
		this.expressApp.use(hpp())
		this.expressApp.use(helmet())
		this.expressApp.use(cors({
			origin: '*',
			optionsSuccessStatus: 200,
			methods: ['GET', 'POST', 'PUT', 'DELETE']
		}))
	}


	// Principio SOLID: Open/Close
	mountHealthCheck() {
		this.expressApp.use('/', routerHealth)
	}

	mountMiddleware() {
		this.expressApp.use(compression())
		this.expressApp.use(express.json())
		this.expressApp.use(express.urlencoded({ extended: true }))
	}

	mountRouter(): void {
		this.expressApp.use('/user', routerUser)
	}

	mountError(): void {
		this.expressApp.use(HandlerErrors.notFound)
	}

}

export default new App().expressApp

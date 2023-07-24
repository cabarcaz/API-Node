import http from 'http'
import { Application } from 'express'
import { Bootstrap } from './base.bootstrap'
import { AppServive } from './services/app.service'

export default class extends Bootstrap {
	constructor(private readonly app: Application) {
		super()
	}

	//? Principio SOLID: Liskov Sustitution.
	//? Principio SOLID: Single Responsability
	initialize() {
		return new Promise<string | Error>((_resolve, reject) => {
			const server = http.createServer(this.app)
			server
				.listen(`${AppServive.PORT}`)
				.on('listening', () => {
					console.log(`Server listening on port: ${AppServive.PORT}`)
				})
				.on('error', error => {
					reject(error)
					console.log(`Server error: ${AppServive.PORT}`)
				})
		})
	}
}

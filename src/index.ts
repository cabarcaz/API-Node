import ServerBootstrap from './bootstrap/server.bootstrap'
import DataBaseBootstrap from './bootstrap/database.bootstrap'
import { Bootstrap } from './bootstrap/base.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const dataBaseBootstrap: Bootstrap = new DataBaseBootstrap()

;(async () => {
	try {
		await serverBootstrap.initialize()
		await dataBaseBootstrap.initialize()
		console.log('Server started successfully')
	} catch (error) {
		console.log(error)
	}
})()

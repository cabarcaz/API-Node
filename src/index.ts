import ServerBootstrap from './bootstrap/server.bootstrap'
import DataBaseBootstrap from './bootstrap/database.bootstrap'
import { Bootstrap } from './bootstrap/base.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const databaseBootstrap: Bootstrap = new DataBaseBootstrap()

;(async () => {
	try {
		await databaseBootstrap.initialize(), console.log('DataBase started successfully')
		await serverBootstrap.initialize()
	} catch (error) {
		console.log(error)
	}
})()

import { DB_CONFIG } from '../interfaces/dbConfig.interface'

export class AppServive {
	static get PORT(): number {
		return +process.env.PORT || 3000
	}

	static get DBConfig(): DB_CONFIG {
		return {
			host: process.env.BD_HOST || 'localhost',
			port: +process.env.BD_PORT || 3308,
			entities: [process.env.DB_ENTITIES || 'src/**/*.entity.ts'],
			username: process.env.DB_USER || 'adminUser',
			password: process.env.DB_PASS || '12345',
			database: process.env.DB_NAME || 'bddcursonode',
			synchronize: process.env.DB_SYNC === 'true' ? true : false,
			logging: process.env.DB_LOG === 'true' ? true : false,
		}
	}
}

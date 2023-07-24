import { DB_CONFIG } from '../interfaces/dbConfig.interface'

export class AppServive {
	static get PORT(): number {
		return +process.env.PORT || 3000
	}
}

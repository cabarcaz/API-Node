import { Request, Response } from 'express'
import { IError } from 'src/modules/user/interfaces/helper/ierror'

export default class {
	static notFound(_req: Request, res: Response): void {
		res.status(404).send('Route not found')
	}

	static genericError(error: IError, req: Request, res: Response): void {
		res.status(error.status || 500).json({
			message: error.message,
			stack: error.stack,
		})
	}
}

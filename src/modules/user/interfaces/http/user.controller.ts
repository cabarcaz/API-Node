import { Request, Response, NextFunction } from 'express';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IError } from '../helper/ierror';
import UserFactory from '../../domain/user-factory';
import UserApplication from '../../application/user.application';
import { UserInsertMapping } from './dto/user-insert.dto';

export  default class {
	constructor(private application: UserApplication){
	}

	async insert(req: Request, res: Response, next: NextFunction){

		const { name, lastname, email, password } = req.body
		const emailResul = EmailVO.create(email)

		if(emailResul.isErr()){
			const err: IError = new Error(emailResul.error.message)
			err.status = 411
			return next(err)
		}

		const userResult = await new UserFactory().create(name, lastname, emailResul.value, password)
		if(userResult.isErr()){
			const err: IError = new Error(userResult.error.message)
			err.status = 411
			return next(err)
		}else{
			const data = await this.application.insert(userResult.value)
			const result = new UserInsertMapping().execute(data.propierties())
			res.status(201).json(result)
		}

	}

	async list(req: Request, res: Response){
		const list = await this.application.list()
		const result =
	}

	async listOne(req: Request, res: Response){}

	async update(req: Request, res: Response){}

	async delete(req: Request, res: Response){}



}

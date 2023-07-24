import { Router } from 'express';
import { UserRepository } from '../../domain/user.repository';
import UserInfraestructure from '../../infraestructure/user.infrastructure';
import UserApplication from '../../application/user.application';
import UserController from './user.controller';


const infrastructure: UserRepository = new UserInfraestructure()
const application: UserApplication = new UserApplication(infrastructure)
const controller = new UserController(application)

class UserRouter {
	readonly expressRouter: Router

	constructor() {
		this.expressRouter = Router()
		this.mountRoutes()
	}

	mountRoutes() {
		// Desing pattern: Chains of responsability
		this.expressRouter.post('/', controller.insert)
		this.expressRouter.get('/', controller.list)
		this.expressRouter.get('/:guid', controller.listOne)
		this.expressRouter.put('/:guid', controller.update)
		this.expressRouter.delete('/:guid', controller.delete)
	}

}

export default new UserRouter().expressRouter

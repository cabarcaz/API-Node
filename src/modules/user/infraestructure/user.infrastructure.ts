import databaseBootstrap from '../../../bootstrap/database.bootstrap';
import { UserEmailInvalidException, UserNotFoundException } from '../domain/exceptions/user.exception';
import User from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { EmailVO } from '../domain/value-objects/email.VO';
import { UserEntity } from './user.entity';
import { Result, err, ok } from 'neverthrow';

export default class UserInfraestructure implements UserRepository{

	async list(): Promise<User[]> {
		const repo = databaseBootstrap.dataSource.getRepository(UserEntity)
		const result = await repo.find({ where: { active: true } })

		return result.map((el: UserEntity) => {
			const emailResult = EmailVO.create(el.email)

			if(emailResult.isErr()) {
				throw new UserEmailInvalidException
			}

			return new User({
				guid: el.guid,
				name: el.name,
				lastname: el.lastname,
				email: emailResult.value,
				password: el.password,
				refreshToken: el.refreshToken,
				active: el.active
			})
		})
	}


	async listOne(guid: string): Promise<Result<User, UserNotFoundException>> {

		const repo = databaseBootstrap.dataSource.getRepository(UserEntity)
		const result = await repo.findOne({ where: { guid } })
		const emailResult = EmailVO.create(result.email)

		if(emailResult.isErr()){
			return err(new UserEmailInvalidException())
		}

		if(!result){
			return err(new UserNotFoundException())
		}else{
			return ok(
				new User({
					guid: result.guid,
					name: result.name,
					lastname:  result.lastname,
					email: emailResult.value,
					password: result.password,
					refreshToken: result.refreshToken,
					active: result.active
				})
			)
		}
	}

	async insert(user: User): Promise<User> {
		const userInsert = new UserEntity()
		const { guid, name, lastname, email, password, refreshToken, active } = user.propierties()
		Object.assign(userInsert, {
			guid,
			name,
			lastname,
			email: email.value,
			password,
			refreshToken,
			active
		})

		await databaseBootstrap.dataSource.getRepository(UserEntity).save(userInsert)

		return user
	}


	update(user: User): Promise<User> {
		throw new Error('Method not implemented.');
	}
	delete(guid: string): Promise<User> {
		throw new Error('Method not implemented.');
	}

}

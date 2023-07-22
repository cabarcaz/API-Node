import databaseBootstrap from '../../../bootstrap/database.bootstrap';
import User from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { EmailVO } from '../domain/value-objects/email.VO';
import { UserEntity } from './user.entity';

export default class UserInfraestructure implements UserRepository{
	async list(): Promise<User[]> {
		const repo = databaseBootstrap.dataSource.getRepository(UserEntity)
		const result = await repo.find({ where: { active: true } })

		return result.map((el: UserEntity) => {
			const emailResult = EmailVO.create(el.email)
			// TODO: pendiente neverthow
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


	listOne(guid: string): Promise<User> {
		throw new Error('Method not implemented.');
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

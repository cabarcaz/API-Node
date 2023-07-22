import databaseBootstrap from '../../../bootstrap/database.bootstrap';
import User from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { UserEntity } from './user.entity';

export default class UserInfraestructure implements UserRepository{
	list(): Promise<User[]> {
		throw new Error('Method not implemented.');
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

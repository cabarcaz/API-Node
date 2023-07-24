import { v4 as uuidv4 } from 'uuid'
import { UserPasswordService } from './services/user-password.service'
import User, { UserProperties } from './user'
import { EmailVO } from './value-objects/email.vo'
import { err, ok, Result } from 'neverthrow'
import {
	UserLastRequiredException,
	UserNameRequiredException,
	UserPasswordLengthInvalidException,
	UserPasswordRequiredException,
} from './exceptions/user.exception'

export type UserResult = Result<
	User,
	| UserNameRequiredException
	| UserLastRequiredException
	| UserPasswordRequiredException
	| UserPasswordLengthInvalidException
>

// Desing pattern: Abstract factory
export default class UserFactory {
	async create(name: string, lastname: string, email: EmailVO, password: string): Promise<UserResult> {
		if (!name || name.trim() === '') {
			return err(new UserNameRequiredException())
		}
		if (!lastname || lastname.trim() === '') {
			return err(new UserLastRequiredException())
		}
		if (password.length < 5) {
			return err(new UserPasswordLengthInvalidException(password))
		}

		//Desing pattern : Method factory
		const passwordHash = await UserPasswordService.hash(password)

		const userProperties: UserProperties = {
			name,
			lastname,
			email,
			password: passwordHash,
			guid: uuidv4(),
			refreshToken: uuidv4(),
		}

		const user = new User(userProperties)
		return ok(user)
	}
}

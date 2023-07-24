import { DomainException, DomainExceptionCode } from './domain.exception'

export class UserNameRequiredException extends DomainException {
	constructor() {
		super(UserNameRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_NAME_REQUIRED
	}
	static getMessage() {
		return 'Name is required'
	}
}

export class UserLastRequiredException extends DomainException {
	constructor() {
		super(UserLastRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_LASTNAME_REQUIRED
	}
	static getMessage() {
		return 'Lastname is required'
	}
}

export class UserEmailRequiredException extends DomainException {
	constructor() {
		super(UserEmailRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_REQUIRED
	}
	static getMessage() {
		return 'Email is required'
	}
}

export class UserEmailInvalidException extends DomainException {
	constructor() {
		super(UserEmailInvalidException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_INVALID
	}
	static getMessage() {
		return 'Email is invalid'
	}
}

export class UserPasswordRequiredException extends DomainException {
	constructor() {
		super(UserPasswordRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_PASSWORD_REQUIRED
	}
	static getMessage() {
		return 'Password is invalid'
	}
}

export class UserPasswordLengthInvalidException extends DomainException {
	constructor(password: string) {
		super(UserPasswordLengthInvalidException.getMessage(password))
		this.name = DomainExceptionCode.USER_PASSWORD_LENGTH_INVALID
	}
	static getMessage(password: string) {
		return `Password must be more than 4 characters, but '${password}' has only ${password.length}`
	}
}

export class UserGuidInvalidException extends DomainException {
	constructor() {
		super(UserGuidInvalidException.getMessage())
		this.name = DomainExceptionCode.USER_GUID_INVALID
	}
	static getMessage() {
		return 'Invalid User guid'
	}
}

export class UserNotFoundException extends DomainException {
	constructor() {
		super(UserNotFoundException.getMessage())
		this.name = DomainExceptionCode.USER_NOT_FOUND
	}
	static getMessage() {
		return 'User not found'
	}
}

import { DomainException, DomainExceptionCode } from './domain.exception';

export class UserNameRequiredException extends DomainException{
	constructor(){
		super(UserNameRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_NAME_REQUIRED
	}
	static getMessage(){
		return 'Name is required'
	}
}

export class UserLastRequiredException extends DomainException{
	constructor(){
		super(UserLastRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_LASTNAME_REQUIRED
	}
	static getMessage(){
		return 'Lastname is required'
	}
}

export class UserEmailRequiredException extends DomainException{
	constructor(){
		super(UserEmailRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_REQUIRED
	}
	static getMessage(){
		return 'Email is required'
	}
}

export class UserEmailInvalidException extends DomainException{
	constructor(){
		super(UserEmailInvalidException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_INVALID
	}
	static getMessage(){
		return 'Email is invalid'
	}
}



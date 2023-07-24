import { DomainExceptionCode } from '../enum/domainException'

export abstract class DomainException extends Error {
	constructor(message: string) {
		super(message)
		this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION
	}
}

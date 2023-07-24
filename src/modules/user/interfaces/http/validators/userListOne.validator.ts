import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class UserListOneValidator {
	//Desing patter: Decorator.

	@IsString({ message: 'Guid must be a string' })
	@IsNotEmpty({ message: 'Guid must not be empty' })
	@MinLength(10, { message: 'Guid id too shoort' })
	guid: string
}

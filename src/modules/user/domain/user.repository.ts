import { Result } from 'neverthrow'
import User from './user'
import { UserNotFoundException } from './exceptions/user.exception'
import { UserUpdate } from './interfaces/userUpdate.interface'

// Principio Solid: Inversion dependency
export interface UserRepository {
	// Desing pattern: FACADE
	list(): Promise<User[]>
	listOne(guid: string): Promise<Result<User, UserNotFoundException>>
	insert(user: User): Promise<User>
	update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>>
	delete(guid: string): Promise<Result<User, UserNotFoundException>>
}

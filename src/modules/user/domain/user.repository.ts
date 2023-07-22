import { Result } from 'neverthrow';
import User from './user';
import { UserNotFoundException } from './exceptions/user.exception';

// Principio Solid: Inversion dependency
export interface UserRepository{
// Desing pattern: FACADE
	list(): Promise<User[]>
	listOne(guid: string): Promise<Result<User, UserNotFoundException>>
	insert(user: User): Promise<User>
	update(user: User): Promise<User>
	delete(guid: string): Promise<User>
}

import User, { UserProperties } from './user';

// Principio Solid: Inversion dependency
export interface UserRepository{
// Desing pattern: FACADE
	list(): Promise<User[]>
	listOne(guid: string): Promise<User>
	insert(user: User): Promise<User>
	update(user: User): Promise<User>
	delete(guid: string): Promise<User>
}

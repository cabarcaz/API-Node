import User, { UserUpdate } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

export default class UserApplication{

	//Solid Principle: Inversion dependency
	//Desing Pattern: Injection dependency
	constructor(private readonly userRepository: UserRepository){}

	insert(user: User){
		return this.userRepository.insert(user)
	}

	list(){
		return this.userRepository.list()
	}

	listOne(guid: string){
		return this.userRepository.listOne(guid)
	}

	update(guid: string, user: Partial<UserUpdate>){
		return this.userRepository.update(guid, user)
	}

	delete(guid: string){
		return this.userRepository.delete(guid)
	}
}

import User from '../domain/user';
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

}

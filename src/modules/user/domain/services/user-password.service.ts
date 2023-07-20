import bcryptjs from 'bcryptjs';

export class UserPasswordService{

	static hash(password: string): Promise<string>{
		return bcryptjs.hash(password, 10)
	}

}

import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
	private usersRepository: Repository<User>;

	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	async create(email: string) {
		//verify if user exists
		const userExists = await this.usersRepository.findOne({ email });

		//if exists, return user
		if (userExists) {
			return userExists;
		}

		//if not exists save on DB
		const user = this.usersRepository.create({
			email,
		});

		await this.usersRepository.save(user);

		return user;
	}

	async findByEmail(email: string) {
		const user = await this.usersRepository.findOne({ email });

		return user;
	}
}

export { UsersService };

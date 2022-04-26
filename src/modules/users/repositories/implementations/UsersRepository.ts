import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): User {
        const user = new User();
        Object.assign(user, {
            name,
            email,
            created_at: new Date(),
            updated_at: new Date(),
        });
        this.users.push(user);
        return user;
        // Complete aqui
    }

    findById(id: string): User | undefined {
        const userFindById = this.users.find((user) => user.id === id);
        return userFindById;
        // Complete aqui
    }

    findByEmail(email: string): User | undefined {
        const userFindByEmail = this.users.find((user) => user.email === email);
        return userFindByEmail;
        // Complete aqui
    }

    turnAdmin(receivedUser: User): User {
        const user = receivedUser;
        user.admin = true;
        user.updated_at = new Date();
        this.users.push(...this.users, user);
        return user;
        // Complete aqui
    }

    list(): User[] {
        return this.users;
        // Complete aqui
    }
}

export { UsersRepository };

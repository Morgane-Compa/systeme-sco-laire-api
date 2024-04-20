import appDataSource from "../data-source";
import { User } from "../entities/User";

class UserService {

    private userRepository = appDataSource.getRepository(User);

    // Requests
    // Get all users
    async getAll() {
        console.log("UserService");
        return this.userRepository.find();
    };

    // Get all classroom by id
    async getById(id: number) {
        console.log("UserService");
        return this.userRepository.findOneBy({ id: id });
    };

    // Delete one school
    async delete(id: string) {
        console.log("UserService");
        return this.userRepository.delete(id);
    };

};

export default UserService;

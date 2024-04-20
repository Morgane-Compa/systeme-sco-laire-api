import appDataSource from "../data-source";
import { User_image } from "../entities/UserImage";

class UserImageService {

    private userImageRepository = appDataSource.getRepository(User_image);

    // Requests
    // Get all images
    async getAll() {
        console.log("UserImageService");
        return this.userImageRepository.find();
    };

    // Get one image by the id
    async getById(id: number) {
        console.log("UserImageService");
        return this.userImageRepository.findOneBy({ id: id });
    };

    // Create one image
    async create(userImage: User_image) {
        console.log("UserImageService");
        const newUserImage = this.userImageRepository.create(userImage);
        return this.userImageRepository.save(newUserImage);
    };

    // Delete one image
    async delete(id: string) {
        console.log("userImageService");
        return this.userImageRepository.delete(id);
    };
};

export default UserImageService;
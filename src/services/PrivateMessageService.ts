import appDataSource from "../data-source";
import { Private_message } from "../entities/PrivateMessage";

class PrivateMessageService {
    private privateMessageRepository = appDataSource.getRepository(Private_message);

    // Requests
    //*************************************** Get all PrivateMessage ***************************************
    async getAll() {
        console.log("PrivateMessageService");
        return this.privateMessageRepository.find();
    };

    //*************************************** Get privateMessage by id ***************************************
    async getById(id: number) {
        console.log("PrivateMessageService");
        return this.privateMessageRepository.findOneBy({ id: id });
    };

    //*************************************** Get privateMessage by user id ***************************************
    async getByUserId(user_id_1: number) {
        console.log("PrivateMessageService");
        return this.privateMessageRepository.findOneBy({ user_id_1: user_id_1 });
    };

    //*************************************** Create a new privateMessage ***************************************
    async create(privateMessage: Private_message) {
        console.log("PrivateMessageService");
        const newPrivateMessage = this.privateMessageRepository.create(privateMessage);
        return this.privateMessageRepository.save(newPrivateMessage);
    };

    //*************************************** Update a privateMessage ***************************************
    async privateMessageUpdate(id: string, privateMessage: Private_message) {
        console.log("PrivateMessageService");
        return this.privateMessageRepository.update(id, privateMessage);
    };

    //*************************************** Delete one school ***************************************
    async delete(id: string) {
        console.log("PrivateMessageService");
        return this.privateMessageRepository.delete(id);
    };
};

export default PrivateMessageService;
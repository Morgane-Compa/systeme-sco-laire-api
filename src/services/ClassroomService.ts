import appDataSource from "../data-source";
import { Classroom } from "../entities/Classroom";
import School from "../models/interfaces/School";

class ClassroomService {

    private classroomRepository = appDataSource.getRepository(Classroom);

    // Requests
    // Get all classroom
    async getAll() {
        console.log("ClassRoomService");
        return this.classroomRepository.find();
    };

    // Get all classroom by id
    async getById(id: number) {
        console.log("ClassRoomService");
        return this.classroomRepository.findOneBy({ id: id });
    };

    // Create a new classroom
    async create(classroom: Classroom) {
        console.log("ClassRoomService");
        const newClassroom = this.classroomRepository.create(classroom);
        return this.classroomRepository.save(newClassroom);
    };

    // Update a classroom
    async classroomUpdate(id: string, classroom: Classroom) {
        console.log("ClassroomService");
        return this.classroomRepository.update(id, classroom);
      };

    // Delete one school
    async delete(id: string) {
        console.log("ClassRoomService");
        return this.classroomRepository.delete(id);
    }
}

export default ClassroomService;
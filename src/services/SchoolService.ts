import appDataSource from "../data-source";
import { School } from "../entities/School";

class SchoolService {

    private schoolRepository = appDataSource.getRepository(School);

    // Requests
    // Get all schools
    async getAll() {
        console.log("SchoolService");
        return this.schoolRepository.find();
    };

    // Get one school by the id
    async getById(id: number) {
        console.log("SchoolService");
        return this.schoolRepository.findOneBy({ id: id });
    };

    // Create one school
    async create(school: School) {
        console.log("SchoolService");
        // return appDataSource.query(
        //     `INSERT INTO school (school_name, street_number, street_name, town_name, postal_code, created_at) VALUES ('${school.school_name}', ${school.street_number}, '${school.street_name}', '${school.town_name}', ${school.postal_code}, ${school.created_at});`
        // );
        const newSchool = this.schoolRepository.create(school);
        return this.schoolRepository.save(newSchool);
    };

    // Delete one school
    async delete(id: string) {
        console.log("SchoolService");
        return this.schoolRepository.delete(id);
    };
};

export default SchoolService;
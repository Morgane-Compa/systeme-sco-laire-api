import appDataSource from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {

    private userRepository = appDataSource.getRepository(User);
    private refreshTokens: string[] = [];

    // Requests
    //*************************************** Get all users ***************************************
    async getAll() {
        console.log("UserService");
        return this.userRepository.find();
    };

    //*************************************** Get all users by id ***************************************
    async getById(id: number) {
        console.log("UserService");
        return this.userRepository.findOneBy({ id: id });
    };

    //*************************************** Delete one user ***************************************
    async delete(id: string) {
        console.log("UserService");
        return this.userRepository.delete(id);
    };

    //*************************************** Create one user ***************************************
    async signup(firstname: string, lastname: string, mail: string, phone_number: string, password: string, user_image_id: number, user_role: boolean, school_id: number) {
        console.log("UserService - Sign up");

        if (typeof password !== 'string') {
            throw new Error('Le mot de passe doit être une chaîne de caractères');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            firstname: firstname,
            lastname: lastname,
            mail: mail,
            phone_number: phone_number,
            password: hashedPassword,
            user_image_id: user_image_id,
            user_role: user_role,
            school_id: school_id
        });
        return await this.userRepository.save(newUser);
    };

    //*************************************** user login ***************************************
    async login(mail: string, password: string) {
        console.log('UserService - Login');

        const user = await this.userRepository.findOneBy({ mail: mail });
        if (!user) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }
        const accessToken = jwt.sign(
            { id: user.id, mail: user.mail },
            process.env.JWT_SECRET as string,
            { expiresIn: "10h" }
        );
        const refreshToken = jwt.sign(
            { id: user.id, mail: user.mail },
            process.env.JWT_REFRESH_SECRET as string
        );
        this.refreshTokens.push(refreshToken);
        return { accessToken, refreshToken };
    }

    async refreshToken(token: string) {
        if (!this.refreshTokens.includes(token)) {
            throw new Error('Invalid refresh token');
        }
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as jwt.JwtPayload;
        const accessToken = jwt.sign(
            { id: decoded.id, mail: decoded.mail },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return accessToken;
    };
};

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User_image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    picture_name: string;

    @Column({ nullable: false })
    picture_path: string;
}
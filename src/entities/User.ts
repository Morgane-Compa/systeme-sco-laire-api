import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User_image } from "./UserImage";
import { School } from "./School";
import { Classroom } from "./Classroom";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    firstname: string;

    @Column({ nullable: false })
    lastname: string;

    @Column({ nullable: false })
    mail: string;

    @Column({ nullable: false })
    phone_number: number;

    @ManyToOne(() => User_image, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'user_image_id'})
    user_image: User_image;

    @Column({ nullable: false })
    user_image_id: number;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    user_role: string;

    @ManyToOne(() => School, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'school_id' })
    school: School;

    @Column({ nullable: false })
    school_id: number; 

    @ManyToMany(() => Classroom, classroom => classroom.users)
    @JoinTable({ name: "classroom_user" })
    classrooms: Classroom[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
  
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
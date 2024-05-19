import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { School } from "./School";
import { User } from "./User";

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    classroom_name: string;

    @Column({ nullable: false })
    teacher: string;

    @Column({ nullable: false })
    grade: string;

    // Foreign Key linked to school
    @ManyToOne(() => School, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'school_id' })
    school: School;

    @Column({ nullable: false })
    school_id: number;

    @ManyToMany(() => User, user => user.classrooms, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinTable({ name: "classroom_user" })
    users: User[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
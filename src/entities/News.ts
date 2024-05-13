import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { School } from "./School";
import { Classroom } from "./Classroom";
import { User } from "./User";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    news_text: string;

    @Column({ nullable: true })
    image: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ nullable: false })
    user_id: number;

    // Foreign Key linked to school
    @ManyToOne(() => School, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'school_id' })
    school: School;

    @Column({ nullable: false })
    school_id: number;

    // Foreign Key linked to classroom
    @ManyToOne(() => Classroom, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'classroom_id' })
    classroom: Classroom;

    @Column({ nullable: false })
    classroom_id: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
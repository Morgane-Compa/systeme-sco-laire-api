import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { School } from "./School";

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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
  
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
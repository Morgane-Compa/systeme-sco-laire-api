import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Private_message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    message_text: string;

    @Column({ nullable: false })
    image: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id_1' })
    user1: User;

    @Column({ nullable: false })
    user_id_1: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id_2' })
    user2: User;

    @Column({ nullable: false })
    user_id_2: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
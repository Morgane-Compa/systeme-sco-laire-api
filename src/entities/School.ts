import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  school_name?: string;

  @Column({ nullable: false })
  street_number?: number;

  @Column({ nullable: false })
  street_name?: string;

  @Column({ nullable: false })
  town_name?: string;

  @Column({ nullable: false })
  postal_code?: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedat?: Date;
}

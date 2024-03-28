import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  schoolName?: string;

  @Column({ nullable: false })
  streetNumber?: number;

  @Column({ nullable: false })
  streetName?: string;

  @Column({ nullable: false })
  townName?: string;

  @Column({ nullable: false })
  postalCode?: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt?: Date;

//   @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
//   updatedAt?: Date;
}
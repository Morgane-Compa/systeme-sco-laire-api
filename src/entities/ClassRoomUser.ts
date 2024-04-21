import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classroom } from "./Classroom";
import { User } from "./User";

@Entity()
export class ClassroomUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.classrooms)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Classroom, classroom => classroom.users)
  @JoinColumn({ name: "classroom_id" })
  classroom: Classroom;
}
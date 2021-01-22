
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  subject: string;

  @Column({ default: 0 })
  time: number;

  @Column()
  cintent: string;
}
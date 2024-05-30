import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  feedback_id: number;

  @Column()
  user_id: number;

  @Column()
  chat_id: number;

  @Column()
  rating: number;

  @Column({ nullable: true })
  comment: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}

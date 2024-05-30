import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChatHistory {
  @PrimaryGeneratedColumn()
  chat_id: number;

  @Column()
  user_id: number;

  @Column()
  bot_response: string;

  @Column()
  user_message: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}

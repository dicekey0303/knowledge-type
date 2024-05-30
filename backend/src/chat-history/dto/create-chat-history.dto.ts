import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateChatHistoryDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  bot_response: string;

  @IsString()
  @IsNotEmpty()
  user_message: string;
}

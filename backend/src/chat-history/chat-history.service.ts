import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatHistoryDto } from './dto/create-chat-history.dto';
import { ChatHistory } from './entities/chat-history.entity';

@Injectable()
export class ChatHistoryService {
  constructor(
    @InjectRepository(ChatHistory, 'chat_history')
    private chatHistoryRepository: Repository<ChatHistory>,
  ) { }

  create(createChatHistoryDto: CreateChatHistoryDto) {
    const chatHistory = this.chatHistoryRepository.create(createChatHistoryDto);
    return this.chatHistoryRepository.save(chatHistory);
  }

  findAll() {
    return this.chatHistoryRepository.find();
  }

  findOne(id: number) {
    return this.chatHistoryRepository.findOne({ where: { chat_id: id } });
  }
}

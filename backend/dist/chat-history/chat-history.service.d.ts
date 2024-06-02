import { Repository } from 'typeorm';
import { CreateChatHistoryDto } from './dto/create-chat-history.dto';
import { ChatHistory } from './entities/chat-history.entity';
export declare class ChatHistoryService {
    private chatHistoryRepository;
    constructor(chatHistoryRepository: Repository<ChatHistory>);
    create(createChatHistoryDto: CreateChatHistoryDto): Promise<ChatHistory>;
    findAll(): Promise<ChatHistory[]>;
    findOne(id: number): Promise<ChatHistory>;
}

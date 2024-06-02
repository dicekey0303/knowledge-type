import { ChatHistoryService } from './chat-history.service';
import { CreateChatHistoryDto } from './dto/create-chat-history.dto';
export declare class ChatHistoryController {
    private readonly chatHistoryService;
    constructor(chatHistoryService: ChatHistoryService);
    create(createChatHistoryDto: CreateChatHistoryDto): Promise<import("./entities/chat-history.entity").ChatHistory>;
    findAll(): Promise<import("./entities/chat-history.entity").ChatHistory[]>;
    findOne(id: string): Promise<import("./entities/chat-history.entity").ChatHistory>;
}

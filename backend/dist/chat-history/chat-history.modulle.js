"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_history_controller_1 = require("./chat-history.controller");
const chat_history_service_1 = require("./chat-history.service");
const chat_history_entity_1 = require("./entities/chat-history.entity");
let ChatHistoryModule = class ChatHistoryModule {
};
exports.ChatHistoryModule = ChatHistoryModule;
exports.ChatHistoryModule = ChatHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([chat_history_entity_1.ChatHistory], 'chat_history')],
        controllers: [chat_history_controller_1.ChatHistoryController],
        providers: [chat_history_service_1.ChatHistoryService],
    })
], ChatHistoryModule);
//# sourceMappingURL=chat-history.modulle.js.map
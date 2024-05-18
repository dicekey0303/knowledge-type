"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            elasticsearch_1.ElasticsearchModule.register({
                node: process.env.ELASTICSEARCH_URL,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'postgres',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: 'user_db',
                autoLoadEntities: true,
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: 'chat_history',
                type: 'postgres',
                host: 'postgres',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: 'chat_history_db',
                autoLoadEntities: true,
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: 'feedback',
                type: 'postgres',
                host: 'postgres',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: 'feedback_db',
                autoLoadEntities: true,
                synchronize: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://mongo:27017/response_template_db', {
                auth: {
                    username: process.env.MONGO_INITDB_ROOT_USERNAME,
                    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
                },
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
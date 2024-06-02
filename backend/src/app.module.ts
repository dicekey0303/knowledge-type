import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ChatHistoryModule } from './chat-history/chat-history.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_URL,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'user_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   name: 'chat_history',
    //   type: 'postgres',
    //   host: 'postgres',
    //   port: 5432,
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: 'chat_history_db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot({
    //   name: 'feedback',
    //   type: 'postgres',
    //   host: 'postgres',
    //   port: 5432,
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: 'feedback_db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    MongooseModule.forRoot('mongodb://mongo:27017/response_template_db', {
      auth: {
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      },
    }),
    UserModule,
    // ChatHistoryModule,
    // FeedbackModule,
    AuthModule,
    ConfigModule.forRoot(), // 追加
  ],
})
export class AppModule {}

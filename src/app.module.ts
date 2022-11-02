import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    RoomsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:eph8RG4ZuXjZd2hA@chat-instance.xmua5.mongodb.net/test',
    ),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

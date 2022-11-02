import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { NewMessage } from './dto/message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { TMessage } from './types';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  getMessages(id: string): TMessage[] {
    return [
      {
        id: 0,
        text: 'Hello!',
        userId: Date.now() + '',
        timeSent: Date.now(),
      },
      {
        id: 1,
        text: 'How are you?',
        userId: Date.now() + '',
        timeSent: Date.now(),
      },
    ];
  }

  saveMessage(message: NewMessage) {
    const createdMessage = new this.messageModel(message);

    return createdMessage.save();
  }
}

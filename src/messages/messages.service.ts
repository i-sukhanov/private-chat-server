import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { NewMessage } from './dto/message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async getMessages(id: string): Promise<Message[]> {
    return this.messageModel.find({ roomId: id }).exec();
  }

  async saveMessage(message: NewMessage) {
    const createdMessage = new this.messageModel(message);

    return createdMessage.save();
  }

  async deleteMessages(id: string) {
    await this.messageModel.deleteMany({ roomId: id });
  }
}

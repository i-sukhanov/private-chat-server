import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async create(message: CreateMessageDto) {
    const createdMessage = new this.messageModel(message);

    return createdMessage.save();
  }

  findAll(roomId: string) {
    return this.messageModel.find({ roomId }).exec();
  }

  async delete(roomId: string) {
    await this.messageModel.deleteMany({ roomId });

    return { message: 'Deleted' };
  }

  async read(messageId: string) {
    const message = await this.messageModel.findOneAndUpdate(
      { id: messageId },
      { read: true },
      { new: true },
    );

    return message;
  }
}

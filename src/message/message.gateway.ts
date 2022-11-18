import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessage: CreateMessageDto) {
    const response = await this.messageService.create(createMessage);

    this.server.emit(`message@${createMessage.roomId}`, response);

    return response;
  }

  @SubscribeMessage('getAllMessages')
  findAll(@MessageBody() { roomId }: { roomId: string }) {
    return this.messageService.findAll(roomId);
  }

  @SubscribeMessage('deleteAllMessages')
  deleteAll(@MessageBody() roomId: string) {
    const response = this.messageService.delete(roomId);
    this.server.emit(`erase@${roomId}`);

    return response;
  }
}

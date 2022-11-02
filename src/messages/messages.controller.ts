import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { NewMessage } from './dto/message.dto';
import { Message } from './schemas/message.schema';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':id')
  getMessages(@Param('id') id: string): Promise<Message[]> {
    return this.messagesService.getMessages(id);
  }

  @Post()
  saveMessage(@Body() body: NewMessage) {
    return this.messagesService.saveMessage(body);
  }

  @Delete(':id')
  deleteMessages(@Param('id') id: string) {
    return this.messagesService.deleteMessages(id);
  }
}

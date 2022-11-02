import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { TMessage } from './types';
import { NewMessage } from './dto/message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':id')
  getMessages(@Param('id') id: string): TMessage[] {
    return this.messagesService.getMessages(id);
  }

  @Post()
  saveMessage(@Body() body: NewMessage) {
    return this.messagesService.saveMessage(body);
  }
}

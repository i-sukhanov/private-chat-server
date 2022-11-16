import { Controller, Delete, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Delete(':id')
  deleteMessages(@Param('id') id: string) {
    return this.messagesService.deleteMessages(id);
  }
}

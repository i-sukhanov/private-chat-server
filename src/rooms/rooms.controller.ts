import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Message } from '../types/Messages';

@Controller('room')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get(':id')
  getMessages(@Param('id') id: string): Message[] {
    return this.roomsService.getMessages(id);
  }

  @Post()
  createRoom(@Body() body: { id: string }) {
    this.roomsService.createRoom(body);
  }
}

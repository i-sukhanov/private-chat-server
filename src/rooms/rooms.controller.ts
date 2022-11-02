import { Controller, Post, Body } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('room')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  createRoom(@Body() { id }: { id: string }) {
    this.roomsService.createRoom(id);
  }
}

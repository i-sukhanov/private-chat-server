import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomsService {
  createRoom(id: string) {
    return id;
  }
}

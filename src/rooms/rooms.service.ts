import { Injectable } from '@nestjs/common';
import { Message } from '../types/Messages';

@Injectable()
export class RoomsService {
  getMessages(id: string): Message[] {
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

  createRoom(body: { id: string }) {
    console.log(body.id);
  }
}

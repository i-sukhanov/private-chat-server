import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import type { Message } from '../types/Messages';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  id: string;

  @Prop()
  messages: Message[];
}

export const CatSchema = SchemaFactory.createForClass(Room);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true })
  id: string;

  @Prop()
  userIds: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);

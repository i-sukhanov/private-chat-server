export type CreateMessageDto = {
  id: string | number;
  text: string;
  userId: string;
  timeSent: number;
  roomId: string;
};

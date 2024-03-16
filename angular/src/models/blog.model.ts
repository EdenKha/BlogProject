import {Message} from "./message.model";

export interface Blog {
  id: number;
  title: string;
  desc: string;
  messages: Message[];
}

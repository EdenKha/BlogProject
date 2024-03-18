import {Message} from "./message.model";

export interface Blog {
  id: number;
  title: string;
  desc: string;
  creator: number; //id de l'utilisateur et createur
  messages: Message[];
}

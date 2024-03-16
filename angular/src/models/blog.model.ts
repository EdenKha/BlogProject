import {Utilisateur} from "./utilisateur.model";

export interface Blog {
  id: number;
  iduser: number;
  title: string;
  desc: string;
}

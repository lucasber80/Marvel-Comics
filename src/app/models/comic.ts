import { Creator } from "./creator";

export class Comic {
  id?:number;
  title?: string;
  description?: string;
  thumbnail?: string;
  creators: Creator[] = [];
}

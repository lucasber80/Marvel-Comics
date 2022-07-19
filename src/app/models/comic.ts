import { Creator } from "./creator";

export class Comic {
  title?: string;
  description?: string;
  thumbnail?: string;
  creators: Creator[] = [];
}

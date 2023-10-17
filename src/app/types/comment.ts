export interface APIresponseComments {
  comments: Comment[];
  found: number;
  site_ID: number;
}

export interface Comment {
  ID: number;
  content: string;
  date: string;
  author: {
    avatar_URL: string;
    name: string;
  };
}

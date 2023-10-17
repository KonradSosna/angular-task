export interface APIresponsePosts {
  found: string;
  meta: any;
  posts: Post[];
}

export interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar_URL: string;
  };
}

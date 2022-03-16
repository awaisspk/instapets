export type PostOwner = {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type Post = {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: Date;
  owner: PostOwner;
};

export type Comment = {
  id: string;
  message: string;
  owner: PostOwner;
  post: string;
  publishDate: Date;
};

export type Comments = {
  data: Comment[];
};

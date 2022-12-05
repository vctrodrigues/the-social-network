import { User, UserProfileResponse } from "./user.types";

export type Like = {
  id: string;
  user: User;
};

export type Comment = {
  id: string;
  user: User;
  text: string;
};

export type Post = {
  id: string;
  user: User;
  text?: string;
  media?: string;
  comments: Comment[];
  likes: Like[];
  created_at?: string;
};

export type PostResponse = {
  id: string;
  user: UserProfileResponse;
  text?: string;
  media?: string;
  comments: Comment[];
  likes: Like[];
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};
